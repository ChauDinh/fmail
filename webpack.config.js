const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./src/public/js/main.jsx",
 output: {
  path: path.join(__dirname, "/dist"),
  filename: "bundle.js"
 },
 resolve: {
  extensions: [".jsx", ".js"]
 },
 mode: "development",
 module: {
  rules: [
   {
    test: /\.jsx?/,
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