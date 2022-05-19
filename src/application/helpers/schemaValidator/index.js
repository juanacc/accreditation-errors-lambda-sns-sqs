const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({allErrors: true});
require('ajv-errors')(ajv);
addFormats(ajv);

module.exports = ajv;