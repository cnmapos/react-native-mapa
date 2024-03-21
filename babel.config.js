module.exports = {
    presets: ['module:@react-native/babel-preset', 'module:metro-react-native-babel-preset'],
    plugins: [
        [
          'module-resolver',
          {
            root: ['./demo'],
            alias: {
              '@': './demo',
              'react-native-mapa': './src',
            },
          },
        ],
      ],
};
