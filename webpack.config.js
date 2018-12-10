const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./src/public/js/main.js",
 output: {
  path: path.join(__dirname, "/dist"),
  filename: "bundle.js"
 },
 mode: "development",
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader'
    }
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/views/index.html"
  })
 ]
}