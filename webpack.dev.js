var webpack = require('webpack');

module.exports = {

  output: {
    filename: '[name].js',
    path: './demo/build'
  },

  entry: {
    demo: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './demo/index.jsx'
    ],
    playground: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './node_modules/cosmos-js/component-playground/entry.js'
    ]
  },

  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /flycheck/] },
      { test: /\.raml$/, loader: 'raml' },
      { test: /\.css$/, loader: 'style-loader!css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader?pack=nodeModules', include: /node_modules/ }
    ]
  },

  devServer: {
    contentBase: './demo/build',
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
