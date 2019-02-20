const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                printWidth: 80,
                singleQuote: false,
              }
            }
          },
        ],
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-react-loader',
            query: {
              classIdPrefix: '[name]-[hash:8]__',
              propsMap: {
                fillRule: 'fill-rule',
              },
              xmlnsTest: /^xmlns.*$/,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@storybook/addons': path.resolve(
        __dirname,
        '..',
        'node_modules',
        '@storybook',
        'addons'
      ),
    },
  },
};