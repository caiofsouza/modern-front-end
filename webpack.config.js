const path = require('path')
const MinifyPlugin = require("babel-minify-webpack-plugin")

const config = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts.min.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new MinifyPlugin()
  ],
}

module.exports = config
