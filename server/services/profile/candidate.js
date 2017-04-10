const ProfileConnector = require('../../../shared/db/connectors/profile');

module.exports = {
  getProfile: ProfileConnector.getCandidateProfile,
  setPersonal(candidateId, body) {
    // TODO: validate names
    return ProfileConnector.setPersonal(candidateId, body.name, body.surname);
  }
};
