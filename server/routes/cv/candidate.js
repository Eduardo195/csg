const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const CvService = require('../../services/cv/candidate');
const busboy = require('../helpers/busboy/busboy');

function setup(app) {
  app.get('/api/cv/meta', requireCandidateLogin, (req, res) => {
    CvService.getCvMeta(req.user._id).then((cv) => {
      console.log('cv meta ::: ', cv);
      res.send({ success: true, cv });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });

  app.post('/api/cv', requireCandidateLogin, (req, res) => {
    return busboy(req).then((cv) => {
      console.log('cv', cv);

      return CvService.uploadCv(req.user._id, cv).then((rsp) => {
        console.log('MUCH SUCCESS :::', rsp);
        res.send({ success: true });
      });
    }).catch((err) => {
      console.log('error :::', err);
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
