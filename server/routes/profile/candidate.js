const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const ProfileService = require('../../services/profile/candidate');
const personalRoutes = require('./candidate/personal');

function setup(app) {
  app.get('/api/profile', requireCandidateLogin, (req, res) => {
    return ProfileService.getProfile(req.user._id).then((profile) => {
      if (profile.length !== 1) {
        res.send({ success: false, msg: 'Invalid userId' });
      } else {
        res.send({ success: true, profile: profile[0] });
      }
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
  personalRoutes(app);
}

module.exports = setup;
