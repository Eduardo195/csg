const fs = require('fs');
const path = require('path');
const requireCandidateLogin = require('../helpers/requireLogin/candidate');
const CvService = require('../../services/cv/candidate');
const busboy = require('../helpers/busboy/busboy');

const SAVE_DIR_BASE = path.join(__dirname, '../../files/cv');

function getDir(userId) {
  return `${SAVE_DIR_BASE}/${userId}/`;
}

function setup(app) {
  app.get('/api/cv/meta', requireCandidateLogin, (req, res) => {
    CvService.getCvMeta(req.user._id).then((cv) => {
      res.send({ success: true, meta: cv.cv });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });

  app.get('/api/cv/:name', requireCandidateLogin, (req, res) => {
    CvService.getCv(req.user._id).then(({ cv }) => {
      const filepath = getDir(req.user._id) + path.basename(cv.filename);
      fs.stat(filepath, (err) => {
        if (err) {
          res.send({ success: false, msg: 'File not found' });
        } else {
          const rs = fs.createReadStream(filepath);
          rs.pipe(res);
        }
      });
    }).catch((err) => {
      console.log('error sending file', err);
      res.send({ success: false });
    });
  });

  app.post('/api/cv', requireCandidateLogin, (req, res) => {
    return busboy(req, getDir(req.user._id)).then((cv) => {
      return CvService.uploadCv(req.user._id, cv).then(() => {
        res.send({ success: true });
      });
    }).catch((err) => {
      res.send({ success: false, msg: err ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
