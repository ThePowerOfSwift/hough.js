const webpack = require('webpack');
const path = require('path');

let config = {
  context: path.join(__dirname, 'src'),
  entry: './index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/^canvas$/),
  ],
};
module.exports = config;
