const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const ApplicationsService = require('../../services/applications/candidate/candidate');

function setup(app) {
  app.get('/api/applications/user', requireCandidateLogin, (req, res) => {
    const hardcodedId = '58d997117b449815d453f11c';
    return ApplicationsService.getAll(hardcodedId).then((applications) => {
      res.send({ success: true, applications });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
