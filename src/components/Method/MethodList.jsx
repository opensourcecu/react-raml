import React from 'react';

import styles from './MethodList.css';

import Method from './Method';

export default class MethodList extends React.Component {

  render() {

    console.warn('method', this.props.methods[0]);

    const methods = this.props.methods && this.props.methods.map(method => (
      <Method {...method} />
    ));

    return (
      <div className={styles.root}>
        {methods}
      </div>
    );
  }

}
