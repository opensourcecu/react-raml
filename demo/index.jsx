import React from 'react';

import Root from '../src/components/Root';

import API from './fixtures/sample.raml';

console.warn('API', API);

React.render(<Root {...API} />, document.getElementById('outlet'));
