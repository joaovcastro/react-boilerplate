const HtmlWebPackPlugin = require('html-webpack-plugin');
let path = require('path');

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader',
        'sass-loader',
      ],
    },
  ],
};

const client = {
  entry: {
    client: './src/client/index.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html',
    }),
  ],
};

const server = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: moduleObj,
};

module.exports = (_, arg) =>
  arg.mode === 'development' ? [client] : [client, server];
