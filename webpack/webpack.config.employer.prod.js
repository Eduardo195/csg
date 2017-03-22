const webpack = require('webpack');
const config = require('./webpack.config.prod');

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.USER_TYPE': '"employer"'
  })
)

module.exports = config;
