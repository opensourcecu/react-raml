import React from 'react';

import styles from './Resource.css';

export default class Resource extends React.Component {

  render() {

    const { relativeUri, displayName } = this.props;

    const name = displayName || relativeUri;

    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{name}
          {displayName && [' ', <small className={styles.subtitle}>{relativeUri}</small>]}
        </h2>
      </div>
    );
  }

}
