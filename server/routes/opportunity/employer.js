const requireEmployerLogin = require('../helpers/requireLogin/employer');
const OpportunityService = require('../../services/opportunity/employer/employer');

function setup(app) {
  // POST === Create opportunity
  app.post('/api/opportunity/', requireEmployerLogin, (req, res) => {
    OpportunityService.post(req.user._id, req.body).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      console.log('err', err);
      res.send({ success: false, msg: err.msg ? err.msg : 'Unknown error' });
    });
  });

  // PUT === Update opportunity
  app.put('/api/opportunity/', requireEmployerLogin, (req, res) => {
    OpportunityService.updateOne(req.user._id, req.body).then((result) => {
      if (result.result.nModified >= 1 && result.result.ok === 1) {
        res.send({ success: true, id: req.body.id });
      } else {
        res.send({ success: false, msg: 'Failed to update' });
      }
    }).catch((err) => {
      res.send({ success: false, msg: err.msg ? err.msg : 'Unknown error' });
    });
  });

  // DELETE === Delete opportunity
  app.delete('/api/opportunity/', requireEmployerLogin, (req, res) => {
    OpportunityService.deleteOpportunity(req.user._id, req.body.id).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      console.log('err', err);
      res.send({ success: false, msg: err.msg ? err.msg : 'Unknown error' });
    });
  });

  app.get('/api/opportunities/', requireEmployerLogin, (req, res) => {
    OpportunityService.getAll(req.user._id).then((data) => {
      res.send({ success: true, data });
    }).catch((err) => {
      console.log('err', err);
      res.send({ success: false, msg: err.msg ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
