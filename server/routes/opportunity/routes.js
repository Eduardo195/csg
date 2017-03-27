const db = require('../../../shared/db/connectors/search');
const candidate = require('./candidate');
const employer = require('./employer');

function setup(app) {
  candidate(app);
  employer(app);

  app.get('/api/opportunity/', (req, res) => {
    console.log('going for ', req.query.id);
    db.getByRef(req.query.id).then((opportunity) => {
      if (opportunity) {
        res.send({ success: true, opportunity });
      } else {
        res.send({ success: false, msg: 'Not found' });
      }
    }).catch((err) => {
      console.log('caught');
      res.send({ success: false, msg: err.msg ? err.msg : 'Unknown error' });
    });
  });
}

module.exports = setup;
