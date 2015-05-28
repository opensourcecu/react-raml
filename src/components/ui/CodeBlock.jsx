import React from 'react';

import highlight from './highlight';

import TypeSystem from './TypeSystem';

export default class CodeBlock extends React.Component {

  render() {
    return (
      <TypeSystem>
        <pre>
          <code dangerouslySetInnerHTML={{__html: highlight(this.props.code, this.props.lang)}} />
        </pre>
      </TypeSystem>
    );
  }

}
