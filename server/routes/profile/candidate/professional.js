const requireCandidateLogin = require('../../helpers/requireLogin/candidate');
const ProfileService = require('../../../services/profile/candidate');

function setup(app) {
  app.post('/api/profile/professional', requireCandidateLogin, (req, res) => {
    ProfileService.setProfessional(req.user._id, req.body).then((action) => {
      if (action.result.nModified >= 1) {
        res.send({ success: true });
      } else {
        res.send({ success: false, msg: 'Error - No changes performed' });
      }
    }).catch((err) => {
      res.send({ success: false, msg: err && err.msg ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
