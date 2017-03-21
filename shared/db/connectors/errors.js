/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  FAILED_CONFIRM_ACCOUNT: {
    code: `account_connector_${i++}`,
    msg: 'Failed to confirm account'
  },
  VERIFICATION_HASH_NOT_FOUND: {
    code: `account_connector_${i++}`,
    msg: 'Verification hash not found'
  }
};
