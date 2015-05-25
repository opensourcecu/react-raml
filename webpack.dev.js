var webpack = require('webpack');

module.exports = {

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

  output: {
    filename: '[name].js',
    path: './demo/build'
  },

  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.raml$/, loader: "raml" },
      { test: /\.css$/, loader: 'style-loader!css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader?pack=nodeModules', include: /node_modules/ }
    ]
  },

  resolve: {
    alias: {
      components: __dirname + '/src/components',
      fixtures: __dirname + '/demo/fixtures'
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components']
  },

  devServer: {
    contentBase: './demo/build',
    hot: true
  },

  postcss: {
    nodeModules: [],
    defaults: [
      require('postcss-nested'),
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('autoprefixer-core')({ browsers: ['last 2 versions']})
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
