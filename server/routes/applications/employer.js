const requireEmployerLogin = require('../helpers/requireLogin/employer');
const ApplicationsService = require('../../services/applications/employer');

function setup(app) {
  app.get('/api/applications/employer', requireEmployerLogin, (req, res) => {
    return ApplicationsService.getAll(req.user._id).then((data) => {
      res.send({ success: true, data });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
