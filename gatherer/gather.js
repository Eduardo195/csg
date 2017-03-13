const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');
const NetEmpregos = require('./farmers/netEmpregos/crawler');
const ExpressoEmprego = require('./farmers/expressoEmprego/crawler');

console.log('Starting...\'');
Connector.con.then(() =>{
  const col = Connector.getCollection(TableNames.OPPORTUNITIES);
  Promise.all([
      gather(col, NetEmpregos),
      gather(col, ExpressoEmprego)
  ]).catch(e =>{
    return console.error(e);
  }).then(() => {
    Connector.close();
    console.log('done.');
  })
})

function gather(col, crawler) {
  console.log(`gatherin' for ${crawler.src}`);
  return getLast(col, 50, crawler.src).then(previousData => {
    return crawler.crawl(previousData).then((data) => {
      console.log(`Finished gathering for ${crawler.src} @ ${new Date()}`);
      if(!data || data.length <= 0) {
        return console.log('No records to insert');
      }
      return Connector.insertMany(col, data).then(() => {
        console.log(`inserted ${data.length} records`);
      })
    })
  })
}

const getLast = (col, n, src) => col.find({src}, {ref: 1, date: -1}).sort({ $natural: 1 }).limit(n).toArray();


// const RETRY_TIME = 15 * 60 * 1000; //ms

// gather(ExpressoEmprego);
// gather(NetEmpregos);

//TODO: needs optimizing
// function gather_(worker) {
//   Connector.connect().then(db => {
//     const col = Connector.getCollection(db, TableNames.OPPORTUNITIES);
//     Connector.getLast(col, 1000).then(previousData => {
//     worker(previousData).then((data) => {
//         console.log(`Finished gathering @ ${new Date()}`);
//         if(data.length <= 0) {
//           return console.log('No records to insert');
//         }
//         Connector.insertMany(col, data).catch(error => {
//           return console.error('failed writting to db :::', error);
//         }).then(rsp => {
//           console.log(`inserted ${data.length} records`);
//           db.close();
//         })
//       })
//     });
//   });
// }
