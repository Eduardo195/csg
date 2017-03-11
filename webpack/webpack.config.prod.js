const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const EXCLUDE = (/node_modules/);
const extractLess = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

sharedConfig.module.rules.push(
  {
    test: /\.less$/,
    exclude: EXCLUDE,
    use: extractLess.extract({
          use: [
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "less-loader", options: { sourceMap: true } },
          ],
          fallback: "style-loader" // use style-loader in development
      }),
  }
);
sharedConfig.output.publicPath = '/';
sharedConfig.plugins.push(
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"prod"'}),
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,
      // Eliminate comments
      comments: false,
      // Compression specific options
      compress: { warnings: false, drop_console: true }
  }),
  new ExtractTextPlugin({ filename: "styles.css"}),
  extractLess
);

module.exports = sharedConfig;
