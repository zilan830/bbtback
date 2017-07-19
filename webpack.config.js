const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactStaticPlugin = require("react-static-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
  entry: [
    "react-hot-loader/patch",
    // 'webpack-dev-server/client?http://localhost:8080',
    // 为 webpack-dev-server 的环境打包代码
    // 然后连接到指定服务器域名与端口

    "webpack/hot/only-dev-server",
    // 为热替换(HMR)打包好代码
    // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

    "./src/index.js"
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "#inline-source-map",
  resolve: {
    extensions: [".js"],
    alias: {
      web_modules: path.resolve(__dirname, "src/web_modules/")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: "/.js$/",
        loader: "source-map-loader"
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192 }
          }
          // 'file-loader',
          // 'image-webpack-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
          // {
          //   loader: "postcss-loader"
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8030,
    host: "localhost",
    contentBase: path.resolve(__dirname, "dist"),
    // 输出文件的路径

    publicPath: "/",
    // 和上文 output 的“publicPath”值保持一致
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ReactStaticPlugin({
    //   routes: './src/index.js',  // Path to routes file
    //   template: path.resolve(__dirname, "./src/index.ejs"),    // Path to JSX template file
    // }),
    new HtmlWebpackPlugin({
      title: "Example",
      chunksSortMode: "dependency",
      template: path.resolve(__dirname, "./src/index.ejs")
    })
  ]
};
