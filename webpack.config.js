'use strict';

var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    'angular-ahdin': './angular-ahdin',
    'angular-ahdin.min': './angular-ahdin'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ahdin'
  },
  resolve: {
    alias: {
      'load-image$': 'load-image.all.min/index.js.js',
      'load-image-exif$': 'load-image.all.min/index.js.js',
      'load-image-meta$': 'load-image.all.min/index.js.js'
    }
  },
  externals: {
    'angular': 'angular',
    'blob-util': {
      amd: 'blob-util',
      commonjs: 'blob-util',
      commonjs2: 'blob-util',
      root: 'blobUtil'
    },
    'load-image.all.min/index.js': {
      amd: 'load-image.all.min/index.js',
      commonjs: 'load-image.all.min/index.js',
      commonjs2: 'load-image.all.min/index.js',
      root: 'loadImage'
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      include: /\.min\.js$/,
      minimize: true
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
