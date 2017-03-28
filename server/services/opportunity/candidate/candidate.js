const CandidadeConnector = require('../../../../shared/db/connectors/candidate');
const OpportunityConnector = require('../../../../shared/db/connectors/opportunity');
const Validator = require('./validator');
const errors = require('./errors');

module.exports = {
  applyForOpportunity(dirtyCandidadeId, dirtyApplication) {
    return Validator.validate(dirtyApplication).then((application) => {
      return CandidadeConnector.getCandidate(dirtyCandidadeId).then((candidate) => {
        if (!candidate) {
          throw errors.CANDIDATE_NOT_FOUND;
        }
        return OpportunityConnector.getOneForApplication(application.opId).then((opportunity) => {
          if (!opportunity) {
            throw errors.OPPORTUNIY_NOT_FOUND;
          }
          return CandidadeConnector.applyForOpportunity(
            candidate._id, application.opId,
            opportunity, application
          ).catch((err) => {
            if (err && err.code) {
              throw errors.DUPLICATE_APPLICATION;
            } else {
              throw errors.UNKNOWN;
            }
          });
        });
      });
    });
  }
};
