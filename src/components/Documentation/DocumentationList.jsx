import React from 'react';

import DocumentationItem from './DocumentationItem';

export default class DocumentationList extends React.Component {

  render() {

    const { documentation } = this.props;

    const documentations = documentation && documentation.map(document => (
      <DocumentationItem {...document} />
    ));

    return (
      <div>
        {documentations}
      </div>
    );
  }

}
