const Validator = require('./validator');
const OpportunityConnector = require('../../../../shared/db/connectors/opportunity');
const errors = require('./errors');
const moment = require('moment');

module.exports = {
  post(userId, dirtyOpportunity) {
    return Validator.validate(dirtyOpportunity).then((sanitizedOp) => {
      return OpportunityConnector.getEmployerDetailsById(userId).then((employerDetails) => {
        if (!employerDetails) {
          throw errors.UNKNOWN_USER;
        }
        const opportunity = Object.assign({}, sanitizedOp, {
          src: 'Oportunarium',
          date: moment.now(),
          employerName: employerDetails.nif,
          employerId: employerDetails._id
        });
        return OpportunityConnector.insert(opportunity);
      });
    });
  },
  updateOne(userId, dirtyOpportunity) {
    const dirtyId = dirtyOpportunity.id;
    return Validator.validate(dirtyOpportunity, true).then((sanitizedOp) => {
      return OpportunityConnector.updateOne(userId, dirtyId, sanitizedOp);
    });
  },
  deleteOpportunity(userId, opportunityId) {
    return OpportunityConnector.delete(userId, opportunityId);
  },
  getOne(userId, opportunityId) {
    return OpportunityConnector.getOne(userId, opportunityId);
  },
  getAll(id) {
    return OpportunityConnector.getAll(id);
  }
};
