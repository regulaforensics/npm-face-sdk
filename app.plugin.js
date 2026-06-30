const { createRequire } = require('module'); // passing vulnerability checks
const { withPodfile } = createRequire(process.cwd() + '/package.json')('@expo/config-plugins');

const SOURCES = [
  'https://github.com/CocoaPods/Specs.git',
  'https://github.com/regulaforensics/podspecs.git',
];

module.exports = function withRegulaPodSources(config) {
  return withPodfile(config, (config) => {
    let podfile = config.modResults.contents;

    const missingSources = SOURCES.filter(
      (source) =>
        !podfile.includes(`source '${source}'`) &&
        !podfile.includes(`source "${source}"`)
    );

    if (missingSources.length === 0) {
      return config;
    }

    const header = [
      '# ============================================================================',
      '# Regula Pod Sources',
      '# Added automatically by @regulaforensics/face-sdk',
      '#',
      '# Sources:',
      ...SOURCES.map((s) => `# - ${s}`),
      '# ============================================================================',
      '',
      ...missingSources.map((s) => `source '${s}'`),
      '',
      '',
      '',
    ].join('\n');

    config.modResults.contents = header + podfile;

    return config;
  });
};
