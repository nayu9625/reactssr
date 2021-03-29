const { resolve } = require('path');

module.exports = {
  output: {
    filename: resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}