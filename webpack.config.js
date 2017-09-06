const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    build: './src/index'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
      }
    })
  ]
}