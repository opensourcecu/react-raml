import React from 'react';

import styles from './Root.css';

import DocumentationList from '../Documentation/DocumentationList';

export default class Root extends React.Component {

  render() {
    return (
      <div className={styles.root}>
      <h1 className={styles.title}>{this.props.title}{' '}
        {this.props.version &&
         <small className={styles.version}>{this.props.version}</small>}
      </h1>
      {this.props.documentation &&
       <DocumentationList documentation={this.props.documentation} />}
      </div>
    );
  }

}
