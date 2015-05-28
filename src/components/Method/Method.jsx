import React from 'react';

import MarkdownBlock from '../ui/MarkdownBlock';

import Body from './Body';

import styles from './Method.css';

export default class Method extends React.Component {

  renderDescription(description) {
    return (
      <div className={styles.description}>
        <MarkdownBlock content={description} />
      </div>
    );
  }

  render() {

    const { method, displayName, description, body } = this.props;

    return (
      <div className={styles.root}>
        <h2 className={styles.title}>
          <span className={styles.method}>{method}</span>
          {displayName && [' ', <span className={styles.displayName}>{displayName}</span>]}
        </h2>

        {description && this.renderDescription(description)}

        {body && <Body body={body} />}

      </div>
    );
  }

}
