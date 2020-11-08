const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    delay: "./src/tasks/task-1.js",
    toggleUserState: "./src/tasks/task-2.js",
    makeTransaction: "./src/tasks/task-3.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 4444,
    open: true,
    stats: "errors-only",
  },
};
