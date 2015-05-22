import React from 'react';

import DefaultStyles from '../src/components/DefaultStyles';
import Root from '../src/components/Root/Root';

import API from './raml/sample.raml';

console.warn('api', API);

React.render(
  <DefaultStyles><Root {...API} /></DefaultStyles>
, document.getElementById('outlet'));
