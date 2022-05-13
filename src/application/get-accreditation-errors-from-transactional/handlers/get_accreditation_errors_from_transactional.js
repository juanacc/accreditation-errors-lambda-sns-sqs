//const {logger} = require('@common/node-logger');
const {transactionalAccreditationErrorsMapper} = require('../mappers');
const {snsParamsSerializer} = require('../serializers');
const {sendMessage} = require('../../helpers/aws/sns');

module.exports.handler = async (event, context, callback) => {
  try {
    //logger.info('event: ', event);
    console.log('event: ', event);
    const dataAccount = transactionalAccreditationErrorsMapper(
        JSON.parse(event.body),
    );
    const params = snsParamsSerializer(dataAccount);
    const response = await sendMessage(params);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  } catch (error) {
    //logger.error('error: ', error);
    console.log('error: ', error);
    callback(error);
  }
};