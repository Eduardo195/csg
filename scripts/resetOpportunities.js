const Connector = require('../shared/db/connectors/connector');
const TableNames = require('../shared/db/tableNames');
const { resetTable } = require('./helpers');

resetTable(Connector, TableNames.OPPORTUNITIES).then(() => {
  console.log('done.');
  Connector.close();
});
