const {transactionalAccreditationErrorsMapper} = require('../mappers');
const {snsParamsSerializer} = require('../serializers');
const {sendMessage} = require('../../helpers/aws/sns');
const {validateTransactional} = require('../../middleware/transactional');
const {formatError} = require('../../helpers/formatError');

module.exports.handler = async (event, context, callback) => {
  try {
    console.log('event: ', event);

    const body = JSON.parse(event.body);
    const errors = validateTransactional(body);
    
    if(errors.length > 0) {
      const formattedErrors = formatError(errors);
      return callback(null, formattedErrors);
    }

    //const dataAccount = transactionalAccreditationErrorsMapper(body);
    //const params = snsParamsSerializer(dataAccount);
    const params = snsParamsSerializer(body);
    const response = await sendMessage(params);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  } catch (error) {
    console.log('error: ', error);
    callback(error);
  }
};