const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

config.output.path = path.join(__dirname, '../public/user');

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.USER_TYPE': '"user"'
  })
)

module.exports = config;
