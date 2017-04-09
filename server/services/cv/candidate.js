const CandidadeConnector = require('../../../shared/db/connectors/candidate');

module.exports = {
  uploadCv(dirtyCandidadeId, filestream) {
    return CandidadeConnector.setCv(dirtyCandidadeId, filestream);
  },
  getCvMeta(dirtyCandidadeId) {
    return CandidadeConnector.getCvMeta(dirtyCandidadeId);
  },
  getCv(dirtyCandidadeId) {
    return CandidadeConnector.getCv(dirtyCandidadeId);
  }
};
