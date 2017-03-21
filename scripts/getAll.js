const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connector');
const { findAndLog } = require('./helpers');

const tables = Object.keys(TableNames);
const promiseArray = tables.map((table) => {
  return findAndLog(Connector, TableNames[table], {});
});

Promise.all(promiseArray).then(() => {
  Connector.close();
});
