import React from 'react'

import styles from './Root.css';

export default class Root extends React.Component {

  render() {
    return(
      <div className={styles.root}>
        <h1 className={styles.title}>{this.props.title}{' '}
          {this.props.version &&
           <small className={styles.version}>{this.props.version}</small>}
        </h1>
      </div>
    );
  }

}
