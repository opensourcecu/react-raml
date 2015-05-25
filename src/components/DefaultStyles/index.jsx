import React from 'react';

import styles from './DefaultStyles.css';

export default class DefaultStyles extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }

}
