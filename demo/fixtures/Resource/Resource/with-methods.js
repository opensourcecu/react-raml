import description from 'raw!./description.md';

module.exports = {
  relativeUri: '/gists',
  displayName: 'Gists',
  description: description,
  methods: require('../../Method/MethodList/default.js').methods
};
