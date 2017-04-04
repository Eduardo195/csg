const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const ApplicationsService = require('../../services/applications/candidate');

function setup(app) {
  app.get('/api/applications/user', requireCandidateLogin, (req, res) => {
    return ApplicationsService.getAll(req.user._id).then((applications) => {
      res.send({ success: true, applications });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
