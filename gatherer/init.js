const TableNames = require('./tableNames');
const Connector = require('./db/connector');

const DISTRICTS_DATA = require('./helpers/data/districts');
const CONTRACT_TYPES_DATA = require('./helpers/data/contractTypes');

Connector.connect().then(db => {
  return dropCollections(db).catch(err => {

    return console.log('failed to drop', err);
  }).then(() => {
    return init(db).then( () =>{
      db.close();
      console.log('done');
    });
  });
}) .catch(error => {
  return console.error(error);
});

function dropCollections(db) {
  return Promise.all([
    Connector.dropCollection(db, TableNames.DISTRICTS),
    Connector.dropCollection(db, TableNames.CONTRACT_TYPES)
  ]);
}

function init(db) {
    return Promise.all([
      createDisctrictsCollection(db),
      createContractTypesCollection(db),
    ])
}

function createDisctrictsCollection(db) {
  return Connector.createCollection(db, TableNames.DISTRICTS).then((col) => {
      return Connector.createIndex(col, {label:1}, {unique:true}).then(() => {
        return Connector.insertMany(col, DISTRICTS_DATA);
      });
  });
}

function createContractTypesCollection(db) {
  return Connector.createCollection(db, TableNames.CONTRACT_TYPES).then((col) => {
      return Connector.createIndex(col, {label:1}, {unique:true}).then(() => {
        return Connector.insertMany(col, CONTRACT_TYPES_DATA);
      });
  });
}
