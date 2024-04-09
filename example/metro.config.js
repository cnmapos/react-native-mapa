const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const reactNativeMapaPath = '/Users/leiwang/codes/cnmapos/ReactNativeMapSdk/';
const path = require("path");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        extraNodeModules: {
            'react-native-mapa': reactNativeMapaPath,
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-native': path.resolve(__dirname, 'node_modules/react-native')
        },        
    },
    watchFolders: [reactNativeMapaPath],
  };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
