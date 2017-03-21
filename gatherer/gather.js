const Connector = require('../shared/db/connectors/connector');
const TableNames = require('../shared/db/tableNames');
const NetEmpregos = require('./farmers/netEmpregos/crawler');
const ExpressoEmprego = require('./farmers/expressoEmprego/crawler');

const getLast = (col, n, src) => col.find({ src }, { ref: 1, date: -1 })
  .sort({ $natural: 1 }).limit(n).toArray();

function gather(col, crawler) {
  console.log(`gatherin' for ${crawler.src}`);
  return getLast(col, 50, crawler.src)
    .then(previousData => crawler.crawl(previousData).then((data) => {
      console.log(`Finished gathering for ${crawler.src} @ ${new Date()}`);
      if (!data || data.length <= 0) {
        return console.log('No records to insert');
      }
      return Connector.insertMany(col, data).then(() => {
        console.log(`inserted ${data.length} records`);
      });
    }));
}

console.log('Starting...\'');
Connector.con.then(() => {
  const col = Connector.getCollection(TableNames.OPPORTUNITIES);
  Promise.all([
    gather(col, NetEmpregos),
    gather(col, ExpressoEmprego)
  ]).catch(e => console.error(e)).then(() => {
    Connector.close();
    console.log('done.');
  });
});
