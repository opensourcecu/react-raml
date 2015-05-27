import { parameters } from '../../NamedParameter/NamedParameterList/default.js';
import description from 'raw!./description.md';

module.exports = {
  relativeUri: '/gists',
  displayName: 'Gists',
  resources: [{
    relativeUri: '/public',
    displayName: 'Public Gists',
    resources: [{
      relativeUri: '/{id}',
      displayName: 'Gist',
      description: description,
      uriParameters: parameters
    }]
  }]
};
