import React from 'react';

import styles from './NamedParameter.css';

import MarkdownBlock from '../ui/MarkdownBlock';

export default class NamedParameter extends React.Component {

  render() {

    const { name, required, displayName, description } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.summary}>
          <div className={styles.name}>
            {name}
          </div>
          {required &&
           <div className={styles.required}>Required</div>}
        </div>
        <div className={styles.details}>
          {displayName &&
           <div className={styles.displayName}>{displayName}</div>}
           {description &&
            <div className={styles.description}>
            <MarkdownBlock content={description} />
            </div>}
        </div>
      </div>
    );
  }

}
