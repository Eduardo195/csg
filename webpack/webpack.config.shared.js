const path = require('path');
const webpack = require('webpack');

const EXCLUDE = (/node_modules/);

const config = {
  entry: {
    candidate: ['./client/containers/root/candidate'],
    employer: ['./client/containers/root/employer'],
    guest: ['./client/containers/root/guest']
  },
  output: {
    path: path.join(__dirname, '../public/static'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: EXCLUDE },
      { test: /\.jsx$/, use: 'babel-loader', exclude: EXCLUDE },
      { test: /\.png$/, use: 'file-loader', exclude: EXCLUDE },
      { test: /\.svg$/, use: 'file-loader', exclude: EXCLUDE },
      { test: /\.gif$/, use: 'file-loader', exclude: EXCLUDE }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'png', '.svg', '.gif', '.less'],
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
