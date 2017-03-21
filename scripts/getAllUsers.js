const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connector');
const UnvConnector = require('../shared/db/unvConnector');

function showAll(Conn, table) {
  return Conn.con.then(() => Conn.getCollection(table)
          .find().toArray().then((res) => {
            console.log(`Found ${res.length} unconf results`);
            res.forEach(r => console.log(r));
            return Conn.close();
          }));
}

showAll(Connector, TableNames.LOCAL_USERS).then(() => {
  showAll(UnvConnector, TableNames.UNVERIFIED);
});
