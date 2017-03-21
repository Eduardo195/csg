const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connector');
const { findAndLog } = require('./helpers');

Promise.all([
  findAndLog(Connector, TableNames.PASSWORD_RESET, {})
]).then(() => {
  return Connector.close();
});
