const TableNames = require('../shared/db/tableNames');
const Connector = require('../shared/db/connector');

function showAll(Conn, table) {
  return Conn.con.then(() => Conn.getCollection(table)
          .find().toArray().then((res) => {
            console.log(`Found ${res.length} results`);
            res.forEach(r => console.log(r));
            console.log('closing');
            Conn.close();
          })
        );
}

showAll(Connector, TableNames.PASSWORD_RESET);
