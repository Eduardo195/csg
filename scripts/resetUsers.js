const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');
const { resetTable } = require('./helpers');

resetTable(Connector, TableNames.LOCAL_USERS, { username: 1 }).then(() => {
  resetTable(Connector, TableNames.LOCAL_USERS_UNV, { username: 1 }, { unique: true, expireAfterSeconds: 3600 }).then(() => {
    console.log('done.');
    Connector.close();
  });
});
