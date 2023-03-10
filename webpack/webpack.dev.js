const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
    // open: true,
    historyApiFallback: true,
  },


});