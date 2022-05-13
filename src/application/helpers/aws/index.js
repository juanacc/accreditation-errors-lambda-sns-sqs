const AWS = require('aws-sdk');
//const config = require('config');

//const awsRegion = config.get('topic.awsRegion');
const awsRegion = process.env.REGION;

AWS.config.update({
  region: awsRegion,
});

module.exports = AWS;