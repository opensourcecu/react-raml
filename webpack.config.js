var webpack = require('webpack');

var loaders = [
  { test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/ },
  { test: /\.raml$/, loader: "raml" },
  { test: /\.css$/, loader: 'style-loader!css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' }
];

module.exports = {

  name: 'demo',

  entry: {
    demo: ['webpack/hot/dev-server', './demo/index.jsx']
  },

  output: {
    filename: 'main.js',
    path: './demo/build'
  },

  module: {
    loaders: loaders,
    noParse: []
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './demo/build',
    hot: true
  },

  postcss: [ require('postcss-local-scope') ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
