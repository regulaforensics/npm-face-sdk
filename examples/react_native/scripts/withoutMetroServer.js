const { withAppDelegate, withAppBuildGradle, withMainApplication, withXcodeProject } = require('expo/config-plugins')

function replaceRequired(contents, pattern, replacement, description) {
    if (!pattern.test(contents)) throw new Error(`Standalone build: cannot find ${description}`)
    return contents.replace(pattern, replacement)
}

module.exports = config => {
    config = withAppDelegate(config, config => {
        let contents = config.modResults.contents
        if (!contents.includes('// Standalone demo: no development menu.')) {
            contents = replaceRequired(contents, /let factory = ExpoReactNativeFactory\(delegate: delegate\)/,
                `let factory = ExpoReactNativeFactory(delegate: delegate)
    // Standalone demo: no development menu.
#if DEBUG
    factory.devMenuConfiguration = RCTDevMenuConfiguration(
      devMenuEnabled: false, shakeGestureEnabled: false, keyboardShortcutsEnabled: false)
#endif`, 'React Native factory')
        }
        contents = replaceRequired(contents,
            /override func bundleURL\(\) -> URL\? \{[\s\S]*?\n  \}/,
            `override func bundleURL() -> URL? {
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
  }`, 'bundleURL method')
        config.modResults.contents = contents
        return config
    })

    config = withXcodeProject(config, config => {
        const phases = Object.values(config.modResults.hash.project.objects.PBXShellScriptBuildPhase || {})
        const phase = phases.find(phase => phase.name === '"Bundle React Native code and images"')
        if (!phase) throw new Error('Standalone build: cannot find iOS bundle build phase')
        // Bundle plain JS in Debug as well. Hermes loads it directly, without an
        // additional optimizing bytecode compiler pass or a Metro server.
        phase.shellScript = JSON.stringify(`set -e
if [[ -f "$SRCROOT/.xcode.env" ]]; then source "$SRCROOT/.xcode.env"; fi
if [[ -f "$SRCROOT/.xcode.env.local" ]]; then source "$SRCROOT/.xcode.env.local"; fi
export PROJECT_ROOT="$PROJECT_DIR/.."
cd "$PROJECT_ROOT"
export NODE_ENV=production
export RCT_NO_LAUNCH_PACKAGER=1
ENTRY_FILE=$("$NODE_BINARY" -e "require('expo/scripts/resolveAppEntry')" "$PROJECT_ROOT" ios absolute | tail -n 1)
CLI_PATH=$("$NODE_BINARY" --print "require.resolve('@expo/cli', { paths: [require.resolve('expo/package.json')] })")
DEST="$CONFIGURATION_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH"
mkdir -p "$DEST"
rm -rf "$DEST/web"
mkdir -p "$DEST/web/src"
cp src/*.html src/*.css "$DEST/web/src/"
cp -R images "$DEST/web/"
"$NODE_BINARY" "$CLI_PATH" export:embed --entry-file "$ENTRY_FILE" --platform ios --dev false --minify false --bundle-output "$DEST/main.jsbundle" --assets-dest "$DEST"
`)
        phase.alwaysOutOfDate = 1
        return config
    })

    config = withMainApplication(config, config => {
        if (!config.modResults.contents.includes('useDevSupport = false')) {
            config.modResults.contents = replaceRequired(config.modResults.contents,
                /context = applicationContext,/, 'context = applicationContext,\n      useDevSupport = false,', 'Android ReactHost context')
        }
        return config
    })

    config = withAppBuildGradle(config, config => {
        if (!config.modResults.contents.includes('// Standalone demo: embed JS in Debug.')) {
            config.modResults.contents = replaceRequired(config.modResults.contents, /react \{/,
                `react {
    // Standalone demo: embed JS in Debug.
    debuggableVariants = []
    extraPackagerArgs = ["--minify", "false"]
    hermesFlags = ["-O0"]`, 'Android react block')
        }
        if (!config.modResults.contents.includes('tasks.register("copyWebAssets", Sync)')) {
            config.modResults.contents += `
android.sourceSets.main.assets.srcDir(layout.buildDirectory.dir("generated/webAssets").get().asFile)
tasks.register("copyWebAssets", Sync) {
    from(projectRoot) { include "src/*.html", "src/*.css", "images/**" }
    into(layout.buildDirectory.dir("generated/webAssets/web"))
}
tasks.named("preBuild").configure { dependsOn("copyWebAssets") }
`
        }
        return config
    })
    return config
}
