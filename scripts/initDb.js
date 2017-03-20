const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');

Connector.con.then(() => {
  Connector.dropCollection(TableNames.PASSWORD_RESET).catch(e => e).then(() => {
    Connector.createCollection(TableNames.PASSWORD_RESET).then((col) => {
      Connector.createIndex(col, { email: 1 }, {
        unique: true,
        expireAfterSeconds: 3600
      }).then(() => {
        Connector.close();
        console.log('done.');
      });
    });
  });
});
