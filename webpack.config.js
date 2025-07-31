const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node-modules/,
        use: {
          loader: "ts-loader",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Document",
      template: "./src/index.html"
    }),
    new MiniCSSExtractPlugin()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }
}
