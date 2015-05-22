import React from 'react';

import Root from '../src/components/Root/Root';

import API from './raml/sample.raml';

import styles from '../src/styles/default.css';

console.warn('api', API);

React.render(
  <div className={styles.root}><Root {...API} /></div>
, document.getElementById('outlet'));
