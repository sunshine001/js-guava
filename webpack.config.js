const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    uri: './src/uri.js',
    check: './src/check.js',
    eventbus: './src/eventbus.js',
    shared: './src/shared.js',
    store: './src/store.js',
    logger: './src/logger.js',
    format: './src/format.js',
    shake: './src/shake.js',
    filter: './src/filter.js',
    interval: './src/interval.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./lib"),
    libraryTarget: 'commonjs'
  },
  mode: "development",
  plugins:[
    new CleanWebpackPlugin()        
  ]
}
