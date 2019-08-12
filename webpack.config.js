const path = require('path');
const nodeExternals = require('webpack-node-externals');

const TargetPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: TargetPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
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
  externals: [nodeExternals()]
};

