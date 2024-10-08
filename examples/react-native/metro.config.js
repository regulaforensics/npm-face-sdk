const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const folders = [
    path.resolve(path.join(__dirname, './node_modules'))
];

const config = {
    resolver: {
        nodeModulesPaths: folders
    },
    watchFolders: folders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
