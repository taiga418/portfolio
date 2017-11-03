const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './client/styles/scss/index.scss',
    'webpack-dev-server/client?http://localhost:8080',
    './client/app.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      // for font aweseome
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '/assets/'       // override the default path
           }
         }]
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
