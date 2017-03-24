const path = require('path');
const webpack = require('webpack');

const EXCLUDE = (/node_modules/);

const config = {
  entry: {
    // app: ['./client/index']
    app: ['./client/containers/root/root']
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: EXCLUDE },
      { test: /\.jsx$/, use: 'babel-loader', exclude: EXCLUDE },
      { test: /\.svg$/, use: 'file-loader', exclude: EXCLUDE }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jpg', '.svg', '.less'],
    modules: [
      path.resolve(__dirname, '../client'),
      path.resolve(__dirname, '../node_modules/'),
      path.resolve(__dirname, '../shared/data')
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

module.exports = config;
