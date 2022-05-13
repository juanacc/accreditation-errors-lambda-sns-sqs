//const config = require('config');
//const arnTopic = config.get('topic.arnAccreditationErrorsTopic');
const arnTopic = process.env.ACCREDITATION_ERRORS_TOPIC;

exports.snsParamsSerializer = (dataAccount) => ({
  Message: JSON.stringify(dataAccount),
  Subject: 'New Accreditation Error',
  TopicArn: arnTopic,
});