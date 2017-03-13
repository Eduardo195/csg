const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');

Connector.con.then(() => {
  Connector.dropCollection(TableNames.OPPORTUNITIES).then(() => {
    Connector.createCollection(TableNames.OPPORTUNITIES).then((col) => {
      Connector.createIndex(col, { ref: 1 }, { unique: true }).then(() => {
        Connector.close();
        console.log('done.');
      });
    });
  });
});
