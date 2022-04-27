const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const DataPacker = require('./plugins/data-packer')
const FaviconGenerator = require('./plugins/favicon-generator')
const PhotosPacker = require('./plugins/photos-packer')
const StaticTemplateRenderer = require('./plugins/static-template-renderer')

const publicPath = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: publicPath,
    filename: 'app.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new PhotosPacker(),
    new DataPacker(),
    new FaviconGenerator(),
    new HtmlWebpackPlugin({
      template: './src/static_templates/index.html',
    }),
    new WebpackManifestPlugin({})
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: publicPath
    },
    watchFiles: 'src/**/*',
    hot: true,
  }
}
