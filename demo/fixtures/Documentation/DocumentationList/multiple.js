import sample from '../DocumentationItem/default.js';

module.exports = {
  documentation: [
    sample,
    Object.assign({}, sample, {
      title: "Other Title"
    })
  ]
}
