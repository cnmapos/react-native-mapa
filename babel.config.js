module.exports = {
    presets: [
      ['module:@react-native/babel-preset'],
      // ['module:metro-react-native-babel-preset']
    ],
    plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '@': './',
              'react-native-mapa': './src',
            },
          },
        ],
        // ["@babel/plugin-transform-react-jsx", {
        //   "runtime": "automatic"
        // }]
      ],
};
