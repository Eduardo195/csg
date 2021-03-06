const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connectors/connector');
const DISTRICTS_DATA = require('../shared/data/districts');
const CONTRACT_TYPES_DATA = require('../shared/data/contractTypes');

const reset = (colName, indexObj, data) => Connector.dropCollection(colName)
  .catch(e => e)  // ignore drop errors
  .then(() => Connector.createCollection(colName)
  .then(col => Connector.createIndex(col, indexObj, { unique: true })
  .then(() => Connector.insertMany(col, data))));

Connector.con.then(() => {
  Promise.all([
    reset(TableNames.DISTRICTS, { label: 1 }, DISTRICTS_DATA),
    reset(TableNames.CONTRACT_TYPES, { label: 1 }, CONTRACT_TYPES_DATA)
  ]).then(() => {
    Connector.close();
    console.log('done.');
  });
});
