import React from 'react';

import styles from './ResourceList.css';

import Resource from './Resource';

export default class ResourceList extends React.Component {

  render() {

    const { resources } = this.props;

    const resourceList = resources && resources.map(resource => (
      <Resource {...resource} />
    ));

    return (
      <div className={styles.root}>
        {resourceList}
      </div>
    );
  }

}
