const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connector');
const { findAndLog } = require('./helpers');

Promise.all([
  findAndLog(Connector, TableNames.LOCAL_USERS, {}),
  findAndLog(Connector, TableNames.LOCAL_USERS_UNV, {})
]).then(() => {
  return Connector.close();
});
