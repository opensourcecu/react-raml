import React from 'react';

import Root from '../src/components/Root';

import API from './raml/sample.raml';

import styles from '../src/styles/default.css';

React.render(
  <div className={styles.root}><Root {...API} /></div>
, document.getElementById('outlet'));
