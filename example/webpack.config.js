// Imports: Dependencies
const path = require('path');
require("babel-register");
const htmlWebpackPlugin = require('html-webpack-plugin')
// Webpack Configuration
const config = {

  // Entry
  entry: './src/index.js',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'sass-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: ['babel-loader', '@svgr/webpack', 'url-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
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
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './client/dist/index.html',
      filename: 'index.html',
      hash: true
    }),
  ],
};
// Exports
module.exports = config;