import hljs from 'highlight.js';

import 'highlight.js/styles/github.css';

export default (str, lang) => {

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

};
