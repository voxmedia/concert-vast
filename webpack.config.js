const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
// const { version } = require('./package.json');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'concert-vast.js',
    library: 'ConcertVast',
    libraryExport: 'default',
    libraryTarget: 'umd', //browser or module bundler or the circus
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['defaults', 'not ie 10'],
                    },
                    modules: false,
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'index.html',
    }),
    ...serveAssetsFromTestDirectory(),
  ],
  mode: 'development',
  devServer: {
    hot: false,
    inline: false,
  },
};

function serveAssetsFromTestDirectory() {
  const assetDirectory = 'test/assets';
  return fs.readdirSync(assetDirectory).map(entry => {
    const baseName = path.basename(entry);
    return new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'test/' + baseName,
      template: assetDirectory + '/' + baseName,
    });
  });
}
