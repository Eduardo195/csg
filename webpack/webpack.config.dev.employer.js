const config = './webpack.config.dev';

module.exports = config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.USER_TYPE': '"employer"'
  })
)
