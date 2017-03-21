/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  EMAIL_SENDING_FAILED: {
    code: `email_${i++}`,
    msg: 'Failed to send confirmation email'
  }
};
