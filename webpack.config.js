'use strict'; 

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackReactRootPlugin = require('html-webpack-react-root-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './client/app.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App'
    }),
    new HtmlWebpackReactRootPlugin('app'),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery',
          entry: 'dist/jquery.min.js',
          global: 'jQuery',
        },
        {
          module: 'bootstrap',
          entry: 'dist/css/bootstrap.min.css',
          supplements: ['dist/fonts/'],
        },
        {
          module: 'font-awesome',
          entry: 'css/font-awesome.min.css',
          supplements: ['fonts/'],
        },
        {
          module: 'google-roboto',
          entry: {
            path: 'https://fonts.googleapis.com/css?family=Roboto',
            type: 'css',
          },
        },
      ],
    })
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
}