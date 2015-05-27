import React from 'react';

import MarkdownBlock from '../ui/MarkdownBlock';

import styles from './DocumentationItem.css';

export default class Documentation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  toggleExpanded = () => {
    //  this.setState(({ expanded }) => ({
    //    expanded: !expanded
    //  }));
  }

  render() {
    return (
      <div>
        <h3 className={styles.title} onClick={this.toggleExpanded}>{this.props.title}</h3>
        {this.state.expanded && this.renderExpanded()}
      </div>
    );
  }

  renderExpanded() {
    return (
      <MarkdownBlock content={this.props.content} />
    );
  }

}
