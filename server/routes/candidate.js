const requireCandidateLogin = require('../passport/requireLogin/candidate');
const OpportunityService = require('../services/opportunity/candidate/candidate');

function setup(app) {
  app.post('/api/opportunity/apply', requireCandidateLogin, (req, res) => {
    return OpportunityService.applyForOpportunity(req.user._id, req.body).then(() => {
      console.log('success');
      res.send({ success: true });
    }).catch((err) => {
      console.log('api/opportunity/apply', err);
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
