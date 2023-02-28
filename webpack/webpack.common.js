
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  "runtime": "automatic"
                }
              ],
              "@babel/preset-typescript"
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      },
      {

        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
          loader: "file-loader",
          options : {
              name: "/image/[name].[contenthash].[ext]",
              publicPath: url => url.replace(/public/, "")
          }

      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

    ]
  },

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: './client/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './css/[name].css'}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/public/index.html'),

    }),
  ],

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

}