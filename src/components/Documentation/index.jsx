import React from 'react'

import TypeSystem from '../ui/TypeSystem';
import Remarkable from 'remarkable';

import styles from './Documentation.css';

const md = new Remarkable();

export default class Documentation extends React.Component {

  render() {
    return(
      <div>
        <TypeSystem>
          <h1 className={styles.title}>{this.props.title}</h1>
          <div dangerouslySetInnerHTML={{__html: md.render(this.props.content)}} />
        </TypeSystem>
      </div>
    );
  }

}
