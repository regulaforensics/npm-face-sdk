const config = require('expo/metro-config').getDefaultConfig(__dirname)
config.watchFolders = [
    __dirname + '/node_modules'
]
config.resolver.nodeModulesPaths = config.watchFolders
config.resolver.assetExts.push('css')
module.exports = config
