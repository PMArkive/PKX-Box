const serverless = require('serverless-http');
const { app } = require('./src/index');

module.exports.handler = serverless(app);
