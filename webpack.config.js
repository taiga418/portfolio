const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './client/styles/scss/index.scss',
    'webpack-dev-server/client?http://localhost:8080',
    './client/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      {
        test: /\.scss/,
        use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      },
      {
        test: /\.css$/,
        loader: 'sass-loader!css-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
  },
  devtool: 'source-map'
};
