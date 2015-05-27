module.exports = {
  relativeUri: '/gists',
  displayName: 'Gists',
  resources: [{
    relativeUri: '/public',
    displayName: 'Public Gists',
    resources: [{
      relativeUri: '/{id}',
      displayName: 'Gist'
    }]
  }]
};
