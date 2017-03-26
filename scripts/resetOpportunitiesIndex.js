const Connector = require('../shared/db/connectors/connector');
const TableNames = require('../shared/db/tableNames');
const { dropIndexes } = require('./helpers');

dropIndexes(Connector, TableNames.OPPORTUNITIES).then(() => {
  console.log('done.');
  Connector.close();
});
