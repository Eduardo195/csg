/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  INVALID_PARAMS: {
    code: i++,
    msg: 'Invalid params'
  },
  INVALID_TITLE: {
    code: i++,
    msg: 'Invalid title'
  },
  INVALID_DESCRIPTION: {
    code: i++,
    msg: 'Invalid description'
  },
  UNKNOWN_USER: {
    code: i++,
    msg: 'Unknown user'
  }
};
