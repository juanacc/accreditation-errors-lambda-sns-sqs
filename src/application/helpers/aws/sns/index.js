const AWS = require('../../aws');

const snsClient = new AWS.SNS({});

exports.sendMessage = (params) =>
  snsClient.publish(params).promise();