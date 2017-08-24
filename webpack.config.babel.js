'use strict'; 

import path from 'path';
import webpack from 'webpack';
import combineLoaders from "webpack-combine-loaders";
import extractTextPlugin from "extract-text-webpack-plugin";
import htmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackExternalsPlugin from 'html-webpack-externals-plugin';
import htmlWebpackReactRootPlugin from 'html-webpack-react-root-plugin';

const config = {
  devtool: 'source-map',
  entry: './client/main.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader', 
          use: 'css-loader' 
        }),
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'React with Redux Application'
    }),
    new htmlWebpackReactRootPlugin('app'),
    new extractTextPlugin('css/bundle.css'),
    new htmlWebpackExternalsPlugin({
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
        }
      ],
    })
  ],
}

export default config;