/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  LOGIN_REQUIRED_CANDIDATE: {
    code: `service_captcha_${i++}`,
    msg: 'Candidate login required for operation'
  },
  LOGIN_REQUIRED_EMPLOYER: {
    code: `login_required_${i++}`,
    msg: 'Employer login required for operation'
  }
};
