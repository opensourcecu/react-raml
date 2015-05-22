import React from 'react'

import TypeSystem from '../ui/TypeSystem';

import Remarkable from 'remarkable';
import hljs from 'highlight.js';

import styles from './DocumentationItem.css';

import 'highlight.js/styles/github.css';

const md = new Remarkable({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return '';
  }
});

export default class Documentation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  // Ignore for now - leave expanded by default
  toggleExpanded = () => {
    this.setState(({ expanded }) => ({
      expanded: ! expanded
    }));
  }

  render() {
    return(
      <div>
        <h3 className={styles.title}>{this.props.title}</h3>
        {this.state.expanded && this.renderExpanded()}
      </div>
    );
  }

  renderExpanded() {
    return (
      <TypeSystem>
        <div dangerouslySetInnerHTML={{__html: md.render(this.props.content)}} />
      </TypeSystem>
    )
  }

}
