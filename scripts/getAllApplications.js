const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connectors/connector');
const { findAndLog } = require('./helpers');

findAndLog(Connector, TableNames.APPLICATIONS, {}).then(() => {
  Connector.close();
});
