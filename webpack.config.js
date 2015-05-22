if (process.env.NODE_ENV === 'build') {
  module.exports = require('./webpack.build.js');
} else {
  module.exports = require('./webpack.dev.js');
}
