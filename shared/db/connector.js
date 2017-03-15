const Connector = require('./core');

const URL = 'mongodb://localhost:27017/labop';

module.exports = new Connector(URL);
