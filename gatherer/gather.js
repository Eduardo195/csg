const TableNames = require('./tableNames');
const Connector = require('./db/connector');
const NetEmpregos = require('./farmers/netEmpregos/crawler');
const ExpressoEmprego = require('./farmers/expressoEmprego/crawler');

const RETRY_TIME = 15 * 60 * 1000; //ms

console.log('gatherin\'');
gather(ExpressoEmprego);
// gather(NetEmpregos);

//TODO: needs optimizing
function gather(worker) {
  Connector.connect().then(db => {
    const col = Connector.getCollection(db, TableNames.OPPORTUNITIES);
    Connector.getLast(col, 1000).then(previousData => {
    worker(previousData).then((data) => {
        console.log(`Finished gathering @ ${new Date()}`);
        if(data.length <= 0) {
          return console.log('No records to insert');
        }
        Connector.insertMany(col, data).catch(error => {
          return console.error('failed writting to db :::', error);
        }).then(rsp => {
          console.log(`inserted ${data.length} records`);
          db.close();
        })
      })
    });
  });
}
