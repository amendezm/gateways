const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    runtimeChunk: {
      name: "runtime", // necessary when using multiple entrypoints on the same page
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  devServer: {
    static: "./build",
    host: "localhost",
    open: true,
    port: 3000,
  },
};
