const awsServerlessExpress = require('aws-serverless-express');
const { app } = require('./dist/index');
const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
