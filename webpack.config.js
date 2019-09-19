const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/foodlu.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      }, {
        test: /\.mp4$/,
        loader: 'url-loader?limit=10000&mimetype=video/mp4'
      }
    ]
  },
  devtool: 'source-map'
};
