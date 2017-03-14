// TODO: get from env build config file?
const BASE_URL = 'http://localhost:3000/confirmEmail/';

module.exports = {
  getSubject() {
    return 'Account confirmation @lab-Op.com';
  },
  generate(hash) {
    return `
        <div>
          <h2>Account Confirmation</h2>
          <p>Please click the link bellow for us to know your email address exists and you're a real person</p>
          <p>
            <a href="${BASE_URL}${hash}">Confirm Account</a>
          </p>
          <div>Best regards,<div>
          <div>The Op-Lab Team<div>
        </div>
      `;
  }
};
