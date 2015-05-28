import React from 'react';

import MarkdownBlock from '../ui/MarkdownBlock';

import topLevelStyles from './Resource--topLevel.css';
import nestedStyles from './Resource--nested.css';

import ResourceList from './ResourceList';
import NamedParameterList from '../NamedParameter/NamedParameterList';

import MethodList from '../Method/MethodList';

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

  renderDescription(styles, description) {
    return (
      <div className={styles.description}>
        <MarkdownBlock content={description} />
      </div>
    );
  }

  renderResources(styles, resources, uri, depth) {
    return (
      <div className={styles.children}>
        <ResourceList resources={resources} parentUri={uri} depth={depth} />
      </div>
    );
  }

  renderUriParameters(styles, uriParameters) {
    return (
      <div className={styles.uriParameters}>
        <NamedParameterList title="URI Parameters" parameters={uriParameters} />
      </div>
    );
  }

  renderMethods(styles, methods) {
    return (
      <div className={styles.methods}>
        <MethodList methods={methods} />
      </div>
    );
  }

  render() {

    const styles = this.props.depth > 1 ? nestedStyles : topLevelStyles;

    const {
      relativeUri,
      displayName,
      description,
      resources,
      parentUri,
      uriParameters,
      methods
    } = this.props;

    const name = displayName || relativeUri;

    const uri = [parentUri, relativeUri].join('');

    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{name}
          {displayName && [' ', this.renderUri(styles, parentUri, relativeUri)]}
        </h2>
        {description && this.renderDescription(styles, description)}
        {uriParameters && this.renderUriParameters(styles, uriParameters)}
        {methods && this.renderMethods(styles, methods)}
        {resources && this.renderResources(styles, resources, uri, this.props.depth + 1)}
      </div>
    );
  }

}
