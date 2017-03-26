/* eslint no-use-before-define: 0 */
const Connector = require('../shared/db/connectors/connector');
const TableNames = require('../shared/db/tableNames');
const NetEmpregosConfig = require('./farmers/netEmpregos/config');
const ExpressoEmpregoConfig = require('./farmers/expressoEmprego/config');
const gatherer = require('./helpers/gatherer');

// 5 min cron allows for ~20 pages total at 1/sec
ExpressoEmpregoConfig.maxRequests = 5;
ExpressoEmpregoConfig.maxRequests = 5;

const configs = [ExpressoEmpregoConfig, NetEmpregosConfig];
const startTime = Date.now();

console.log('Waking up to get some');
Connector.con.then(() => {
  return Connector.find(TableNames.OPPORTUNITIES, {}).then((results) => {
    return gather(getRefsBySource(results), 0);
  });
}).then(() => {
  console.log(`Done, took ${(Date.now() - startTime) / 1000}sec / ${(Date.now() - startTime) / 60000}min on ${new Date()}`);
  Connector.close();
}).catch((err) => {
  console.log('catastrophic error', err);
});

function gather(previousResults, index) {
  const config = configs[index];
  if (!config) {
    return true;
  }
  return gatherer.gather(config, previousResults[config.src], insertData).catch((err) => {
    return console.log('error gathering :::', err);
  }).then(() => {
    // gather next
    console.log('starting next gatherer');
    return gather(previousResults, index + 1);
  });
}

function insertData(data) {
  return new Promise((resolve, reject) => {
    if (!data || data.length <= 0) {
      return resolve();
    }
    const col = Connector.getCollection(TableNames.OPPORTUNITIES);
    return Connector.insertMany(col, data).then(() => {
      console.log(`inserted ${data.length} records`);
      resolve();
    }).catch(reject);
  });
}

function getRefsBySource(data) {
  return data.reduce((acc, val) => {
    if (val && val.src && val.ref && acc[val.src]) {
      acc[val.src].push(val.ref);
    }
    return acc;
  }, {
    expressoEmprego: [],
    netEmpregos: []
  });
}
