const TableNames = require('./tableNames');
const Connector = require('./db/connector');

Connector.connect().then(db => {
  Connector.dropCollection(db, TableNames.OPPORTUNITIES).then(() => {
    Connector.createCollection(db, TableNames.OPPORTUNITIES).then((col) => {
      Connector.createIndex(col, {ref:1}, {unique:true}).then(() =>{
        db.close();
      });
    });
  })
});
