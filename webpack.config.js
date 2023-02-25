
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {

  entry:  path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundel.js'
  },

  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx','.tsx','.ts'],
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.relative(__dirname, './src/public/index.html')
    })
  ],

  devServer: {
    compress: true,
    port: 3000,
    // open: true,
    historyApiFallback: true,
  },
}