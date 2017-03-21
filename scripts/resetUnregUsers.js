const Connector = require('../shared/db/unvConnector');
const TableNames = require('../shared/db/tableNames');

Connector.con.then(() => {
  Connector.dropCollection(TableNames.UNVERIFIED).catch(e => e).then(() => {
    Connector.createCollection(TableNames.UNVERIFIED).then((col) => {
      Connector.createIndex(col, { username: 1 }, { expireAfterSeconds: 3600 }).then(() => {
        Connector.close();
        console.log('done.');
      });
    });
  });
});
