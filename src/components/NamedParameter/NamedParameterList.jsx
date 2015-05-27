import React from 'react';

import NamedParameter from './NamedParameter';

import styles from './NamedParameterList.css';

import _ from 'lodash';

export default class NamedParameterList extends React.Component {

  render() {

    const params = this.props.parameters && _.map(this.props.parameters, (paramProps, name) => {
      return <NamedParameter name={name} {...paramProps} />;
    });

    return (
      <div className={styles.root}>
        <h3 className={styles.title}>{this.props.title}</h3>
        {params}
      </div>
    );
  }

}
