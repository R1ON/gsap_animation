const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(process.cwd(), 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js'],  // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
};
