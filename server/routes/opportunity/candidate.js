const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const OpportunityService = require('../../services/opportunity/candidate/candidate');

function setup(app) {
  app.post('/api/opportunity/apply', requireCandidateLogin, (req, res) => {
    console.log('api/opportunity/apply');
    return OpportunityService.applyForOpportunity(req.user._id, req.body).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
