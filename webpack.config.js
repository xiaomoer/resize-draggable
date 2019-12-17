const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const TargetPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: TargetPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    })
  ]
};

