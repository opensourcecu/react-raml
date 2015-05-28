import React from 'react';

import DefaultStyles from '../src/components/DefaultStyles';
import Root from '../src/components/Root/Root';
import CodeBlock from '../src/components/ui/CodeBlock';

import API from './raml/sample.raml';

import styles from './styles.css';

React.render(
  <DefaultStyles>
    <Root {...API} />
    <div className={styles.jsonRep}>
      <h3>JSON representation of RAML API:</h3>
      <CodeBlock code={JSON.stringify(API, null, 2)} lang='json' />
    </div>
  </DefaultStyles>
, document.getElementById('outlet'));
