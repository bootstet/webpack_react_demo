var path = require("path")
const { resolve } = require('path');


module.exports = {
  entry: path.join(__dirname, '/app/main.js'),  
  output: {
    path: path.join(__dirname, '/build'), //打包后的文件存放的地方
    filename: 'bundle.js'   //打包后输出文件的文件名
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    hot: true,
    publicPath:'/'
  },
}