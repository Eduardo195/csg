// TODO: get from env build config file?
const BASE_URL = `${
  process.env.NODE_ENV.trim() === 'development' ? 'http://localhost:3000' : 'http://oportunarium.com'
}/#/password/reset/`;

module.exports = {
  getSubject() {
    return 'Password reset @lab-Op.com';
  },
  generate(hash) {
    return `
        <div>
          <h2>Password Reset</h2>
          <p>Please click the link bellow To reset your password</p>
          <p>Be aware this link expires in 1 hour</p>
          <p>
            <a href="${BASE_URL}${hash}">Reset password</a>
          </p>
          <div>Best regards,<div>
          <div>The Op-Lab Team<div>
        </div>
      `;
  }
};
