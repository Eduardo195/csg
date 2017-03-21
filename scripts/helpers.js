function resetTable(Conn, tableName, keys, options) {
  return Conn.con.then(() => {
    return Conn.dropCollection(tableName).catch(e => e).then(() => {
      return Conn.createCollection(tableName).then((col) => {
        return Conn.createIndex(col, keys, options || { unique: true });
      });
    });
  });
}

function find(Conn, tableName, query) {
  return Conn.con.then(() => {
    return Conn.getCollection(tableName).find(query).toArray();
  });
}

function findAndLog(Conn, tableName, query) {
  return find(Conn, tableName, query).then((res) => {
    console.log(`${res.length} records in ${tableName}`);
    res.forEach((entry) => {
      console.log(entry);
    });
  });
}

module.exports = {
  resetTable,
  findAndLog,
  find
};
