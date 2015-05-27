import React from 'react';

import Remarkable from 'remarkable';
import hljs from 'highlight.js';

import TypeSystem from '../ui/TypeSystem';

import 'highlight.js/styles/github.css';

const md = new Remarkable({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
        // Ignore
        return null;
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {
      // Ignore
      return null;
    }

    return '';
  }
});

export default class MarkdownBlock extends React.Component {

  render() {
    return (
      <TypeSystem>
        <div dangerouslySetInnerHTML={{__html: md.render(this.props.content)}} />
      </TypeSystem>
    );
  }

}
