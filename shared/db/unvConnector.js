const Connector = require('./core');

// creating a dif db so we can separte them in the future
const URL = 'mongodb://localhost:27017/labop_reg';

module.exports = new Connector(URL);
