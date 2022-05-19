const ajv = require('../helpers/schemaValidator/index');
const {inputSchema} = require('../schemas/transactional.schema');

exports.validateTransactional = data => {
    const validate = ajv.compile(inputSchema);
    const valid = validate(data);
    
    return valid ? [] : validate.errors;
}