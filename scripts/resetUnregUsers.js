const Connector = require('../shared/db/regConnector');
const TableNames = require('../shared/db/tableNames');

Connector.con.then(() => {
  Connector.dropCollection(TableNames.UNVERIFIED).catch((e) => {
    console.log(e);
    return e;
  }).then(() => {
    console.log('dropped');
    Connector.createCollection(TableNames.UNVERIFIED).then((col) => {
      console.log('created', TableNames.UNVERIFIED);
      col.find({}).toArray().then((data) => {
        console.log('data :::', data);
      });
      Connector.createIndex(col, { createdAt: 1 }, { expireAfterSeconds: 3600 }).then(() => {
        console.log('created index');
        Connector.close();
        console.log('done.');
      });
    });
  });
});
