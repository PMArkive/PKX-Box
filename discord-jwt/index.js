const serverless = require('serverless-http');
const { app } = require('./dist/index');

module.exports.handler = serverless(app);
