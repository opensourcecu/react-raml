var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var csswring = require('csswring');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: 'lib',
    library: 'ReactRaml',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]!postcss-loader'), exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader?pack=nodeModules'), include: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: { react: 'react', 'react/addons': 'react' },

  postcss: {
    nodeModules: [
    ],
    defaults: [
      require('postcss-local-scope'),
      require('postcss-nested'),
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('autoprefixer-core')({ browsers: ['last 2 versions']})
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]

};
