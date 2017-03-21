const Connector = require('../shared/db/connector');
const UnvConnector = require('../shared/db/unvConnector');
const TableNames = require('../shared/db/tableNames');


function init(Con, index) {
  Con.con.then(() => {
    Con.dropCollection(TableNames.LOCAL_EMPLOYERS).catch(e => e).then(() => {
      Con.createCollection(TableNames.LOCAL_EMPLOYERS).then((col) => {
        Con.createIndex(col, index, { unique: true }).then(() => {
          Con.close();
          console.log('done.');
        });
      });
    });
  });
}

init(Connector, { username: 1 });
init(UnvConnector, { username: 1 });
