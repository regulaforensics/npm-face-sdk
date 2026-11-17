const config = require('expo/metro-config').getDefaultConfig(__dirname)
config.watchFolders = [
]
config.resolver.nodeModulesPaths = [__dirname + '/node_modules']
module.exports = config
