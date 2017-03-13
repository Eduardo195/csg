const Connector = require('../shared/db/connector');
const TableNames = require('../shared/db/tableNames');

Connector.con.then(() => {
    Connector.dropCollection(TableNames.LOCAL_USERS).then(() => {
        Connector.createCollection(TableNames.LOCAL_USERS).then((col) => {
            Connector.createIndex(col, { username: 1 }, { unique: true }).then(() => {
                Connector.close();
                console.log('done.');
            });
        });
    });
});
