var path = require('path');

module.exports = {
  entry: './client/app.jsx',

  output: {
    filename: 'app.js',
    path: path.join('/Users/marni001/node_projects/learn_react/myapp/public/javascripts/')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};