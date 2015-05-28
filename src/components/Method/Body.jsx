import React from 'react';

import styles from './Body.css';

import CodeBlock from '../ui/CodeBlock';

import Tabs from '../ui/Tabs';

import _ from 'lodash';

const langForMediaType = (mediaType) => {

  const lang = mediaType.split('/')[1];

  return lang;

};

export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseMediaType(mediaType) {
    this.setState({ mediaType });
  }

  renderMediaTypes() {
    return _.map(this.props.body, (_body, key) => (
      <a href='#' key={key} className={styles.mediaType} onClick={this.chooseMediaType.bind(this, key)}>{key}</a>
    ));
  }

  renderSchema(mediaType, schema) {

    const lang = langForMediaType(mediaType);

    return (
      <CodeBlock code={schema} lang={lang} />
    );

  }

  render() {

    const mediaType = this.state.mediaType || _.keys(this.props.body)[0];

    const { schema } = this.props.body[mediaType];

    const tabs = _.map(this.props.body, (_body, key) => ({
      key,
      name: key
    }));

    return (
      <div className={styles.root}>
        <Tabs tabs={tabs} activeKey={mediaType} onSelect={this.chooseMediaType.bind(this)} />
        {schema && this.renderSchema(mediaType, schema)}
      </div>
    );
  }

}
