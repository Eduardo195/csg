const ProfileConnector = require('../../../shared/db/connectors/profile');

module.exports = {
  getProfile: ProfileConnector.getCandidateProfile
};
