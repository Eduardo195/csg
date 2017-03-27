const CandidadeConnector = require('../../../../shared/db/connectors/candidate');
const Validator = require('./validator');
const errors = require('./errors');

module.exports = {
  applyForOpportunity(dirtyCandidadeId, dirtyApplication) {
    return Validator.validate(dirtyApplication).then((application) => {
      return CandidadeConnector.getCandidate(dirtyCandidadeId).then((candidate) => {
        if (!candidate) {
          throw errors.CANDIDATE_NOT_FOUND;
        }
        return CandidadeConnector.applyForOpportunity(candidate._id, application.opId, application).catch((err) => {
          if (err && err.code) {
            throw errors.DUPLICATE_APPLICATION;
          } else {
            throw errors.UNKNOWN;
          }
        });
      });
    });
  }
};
