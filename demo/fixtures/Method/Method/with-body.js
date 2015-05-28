import description from 'raw!./description.md';
import jsonSchema from 'raw!./schema.json';
import xmlSchema from 'raw!./schema.xml';

module.exports = {
  method: 'get',
  displayName: 'Get a single Gist',
  description: description,
  body: {
    'application/json': {
      schema: jsonSchema
    },
    'text/xml': {
      schema: xmlSchema
    }
  }
};
