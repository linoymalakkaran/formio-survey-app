const path = require('path');
const config = require('./webpack.config.js');
config.entry = path.join(path.resolve(__dirname, 'lib'), 'use.js'),
config.mode = 'production';
config.output.filename = 'survey-cust-component.use.min.js';
module.exports = config;
