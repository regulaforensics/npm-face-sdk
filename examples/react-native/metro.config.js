const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')

const folders = [
    path.resolve(path.join(__dirname, './node_modules'))
]

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return mergeConfig(getDefaultConfig(__dirname), {
        resolver: {
            assetExts: [assetExts, 'css', 'html', 'png'],
            sourceExts: [...sourceExts, 'css', 'html', 'png'],
            nodeModulesPaths: folders,
        },
        watchFolders: folders,
    })
})();