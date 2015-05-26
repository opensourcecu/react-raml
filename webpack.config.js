var objectAssign = require('object-assign');

var config;

if (process.env.NODE_ENV === 'build') {
  config = require('./webpack.build.js');
} else {
  config = require('./webpack.dev.js');
}

module.exports = objectAssign({

  postcss: {
    nodeModules: [],
    defaults: [
      require('postcss-nested'),
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('postcss-calc')(),
      require('autoprefixer-core')({ browsers: ['last 2 versions']})
    ]
  },

  resolve: {
    alias: {
      components: __dirname + '/src/components',
      fixtures: __dirname + '/demo/fixtures'
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components']
  }

}, config);
