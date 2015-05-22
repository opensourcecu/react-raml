var webpack = require('webpack');

var loaders = [
  { test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/ },
  { test: /\.raml$/, loader: "raml" },
  { test: /\.css$/, loader: 'style-loader!css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' }
];

module.exports = {

  name: 'demo',

  entry: {
    demo: ['webpack/hot/dev-server', './demo/index.jsx'],
    playground: ['webpack/hot/dev-server', './node_modules/cosmos-js/component-playground/entry.js']
  },

  output: {
    filename: '[name].js',
    path: './demo/build'
  },

  module: {
    loaders: loaders,
    noParse: []
  },

  resolve: {
    alias: {
      components: __dirname + "/src/components",
      fixtures: __dirname + "/demo/fixtures"
    },
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './demo/build',
    hot: true
  },

  postcss: [
    require('postcss-local-scope'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('autoprefixer-core')({ browsers: ['last 2 versions']})
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
