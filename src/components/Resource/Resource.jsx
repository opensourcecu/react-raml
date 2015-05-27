import React from 'react';

import MarkdownBlock from '../ui/MarkdownBlock';

import topLevelStyles from './Resource--topLevel.css';
import nestedStyles from './Resource--nested.css';

import ResourceList from './ResourceList';
import NamedParameterList from '../NamedParameter/NamedParameterList';

export default class Resource extends React.Component {

  static defaultProps = {
    depth: 1,
  }

  renderUri(styles, parentUri, relativeUri) {
    return (
      <span className={styles.uri}>
        {parentUri &&
         <span className={styles.parentUri}>{parentUri}</span>}
        <span className={styles.relativeUri}>{relativeUri}</span>
      </span>
    );
  }

  render() {

    const styles = this.props.depth > 1 ? nestedStyles : topLevelStyles;

    const { relativeUri, displayName, description, resources, parentUri, uriParameters } = this.props;

    const name = displayName || relativeUri;

    const uri = [parentUri, relativeUri].join('');

    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{name}
          {displayName && [' ', this.renderUri(styles, parentUri, relativeUri)]}
        </h2>
        {description && <MarkdownBlock content={description} />}
        {resources && <div className={styles.children}>
         <ResourceList resources={resources} parentUri={uri} depth={this.props.depth + 1} />
         </div>}
        {uriParameters && <div className={styles.uriParameters}>
         <NamedParameterList title="URI Parameters" parameters={uriParameters} />
        </div>}
      </div>
    );
  }

}
