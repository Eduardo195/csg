/* eslint no-plusplus: 0 */
let i = 0;

function getErrorCode(index) {
  return `busyboy-${index}`;
}

module.exports = {
  NO_FILE_SENT: {
    code: getErrorCode(i++),
    msg: 'No file sent'
  },
  TOO_BIG: {
    code: getErrorCode(i++),
    msg: 'File too big'
  },
  UNKNOWN: {
    code: getErrorCode(i++),
    msg: 'Shit\'s on fire, yo'
  }
};
