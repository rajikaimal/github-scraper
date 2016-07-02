const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const config = {
  entry: ['whatwg-fetch', path.resolve(__dirname, './src/app.js')],
  output: {
    filename: 'src/bundle.js'
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }],
    loaders: [{
      test: /\.js$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      exclude: [nodeModulesPath],
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  watch: false
};

module.exports = config;