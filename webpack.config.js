var webpack = require("webpack");

module.exports = {
  entry: './index',
  output: {
    library: 'jsonQuery',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'json-query.js'
  }
};