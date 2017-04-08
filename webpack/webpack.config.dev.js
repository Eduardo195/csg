const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared.js');

const PORT = 5000;
const EXCLUDE = (/node_modules/);

const config = Object.assign({}, sharedConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // proxy to express
        secure: false
      }
    },
    contentBase: './public',
    hot: true,
    port: PORT
  }
});

sharedConfig.module.rules.push(
  {
    test: /\.less$/,
    exclude: EXCLUDE,
    use: ['style-loader', 'css-loader', 'less-loader']
  }
);
// for hot module replacement
config.output.publicPath = '/';
const entryPoints = Object.keys(config.entry);
entryPoints.forEach((entryPoint) => {
  config.entry[entryPoint].push(
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server'
  );
});
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    })
);

module.exports = config;
