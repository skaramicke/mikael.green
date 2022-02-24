const path = require("path");

const publicPath = path.join(__dirname, "public");

module.exports = {
  mode: 'development',
  entry: "./src/app.js",
  output: {
    path: publicPath,
    filename: "app.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: publicPath
    }
  },
};
