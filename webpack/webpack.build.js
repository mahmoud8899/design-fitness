const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const nodeExternals = require('webpack-node-externals');

const ClientConfig = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: './client/bundle.js'
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
  
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
      new MiniCssExtractPlugin({ filename: './css/[name].css'}),
    ],
  
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
}
const ServerConfig = {

    entry : path.resolve(__dirname, '..', './src/Server/index.js'),
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ig
    output : {
        filename : 'server.js',
        path : path.resolve(__dirname, '..', './build')
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
                publicPath: url => url.replace(/public/, ""),
                
            }
  
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
  
      ]
    },
    plugins :[
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
 

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },

}



module.exports  = [ClientConfig,ServerConfig]