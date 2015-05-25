import React from 'react';

import styles from './TypeSystem.css';

export default class TypeSystem extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }

}
