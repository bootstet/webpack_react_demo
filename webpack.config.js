var path = require("path")
const {
  resolve
} = require('path');


module.exports = {
  entry: path.join(__dirname, '/app/main.jsx'),
  output: {
    path: path.join(__dirname, '/build'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    hot: true,
    publicPath: '/'
  },
  // resolve: {
  //   // Add '.ts' and '.tsx' as resolvable extensions.
  //   extensions: [".ts", ".tsx", ".js", ".json", "jsx"]
  // },
  module: {
    // rules: [
    //   { test: /\.js$/, use: 'raw-loader' },
    // ]
    // rules: [
    // { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
    // ]
    rules: [{
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader', //loader的名称（必须）
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader', // 创建 <style></style>
          },
          {
            loader: 'css-loader', // 转换css
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader', // 编译 Less -> CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}