import React from 'react';

import Remarkable from 'remarkable';

import TypeSystem from '../ui/TypeSystem';

import highlight from './highlight';

const md = new Remarkable({ highlight });

export default class MarkdownBlock extends React.Component {

  render() {
    return (
      <TypeSystem>
        <div dangerouslySetInnerHTML={{__html: md.render(this.props.content)}} />
      </TypeSystem>
    );
  }

}
