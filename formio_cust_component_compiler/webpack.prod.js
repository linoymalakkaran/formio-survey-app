const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'survey-cust-component.min.js';
module.exports = config;
