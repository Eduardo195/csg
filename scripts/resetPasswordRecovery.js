const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');
const { resetTable } = require('./helpers');

resetTable(Connector, TableNames.PASSWORD_RESET, { email: 1 }, { unique: true, expireAfterSeconds: 3600 }).then(() => {
  console.log('done.');
  Connector.close();
});
