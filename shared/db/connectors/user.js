const AccountConnector = require('./account');
const TableNames = require('../tableNames');
const Connector = require('./connector');

module.exports = AccountConnector(Connector, TableNames.LOCAL_USERS, TableNames.LOCAL_USERS_UNV);
