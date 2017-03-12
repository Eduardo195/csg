const TableNames = require('./tableNames');
const Connector = require('./db/connector');
const NetEmpregos = require('./farmers/netEmpregos/crawler');
const ExpressoEmprego = require('./farmers/expressoEmprego/crawler');

const RETRY_TIME = 15 * 60 * 1000; //ms

console.log('gatherin\'');
gather(ExpressoEmprego);
gather(NetEmpregos);

const respawn = (worker) => {
  console.log(`Whipping in ${RETRY_TIME}`);
  setTimeout(() => {
    gather(worker)
  }, RETRY_TIME);
}

function gather(worker) {
  Connector.connect().then(db => {
    const col = Connector.getCollection(db, TableNames.OPPORTUNITIES);
    Connector.getLast(col, 1000).then(previousData => {
    worker(previousData).then((data) => {
        console.log('Finished gathering');
        if(data.length <= 0) {
          respawn(worker);
          return console.log('No records to insert');
        }
        Connector.insertMany(col, data).catch(error => {
          return console.error('failed writting to db :::', error);
        }).then(rsp => {
          console.log(`inserted ${data.length} records`);
          db.close();
          respawn(worker);
        })
      })
    });
  });
}
