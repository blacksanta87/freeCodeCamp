const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // add CSS to the DOM by injecting a <style> tag
            loader: 'style-loader'
          },
          {
            // interprets @import and url() like import/require() will resolve them
            loader: 'css-loader'
          },
          {
            // loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // loads a sass/scss file and compiles it to css
            loader: 'sass-loader'
          }
        ]
      }
    ],
  }
}