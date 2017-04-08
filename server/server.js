const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const sessionConfig = require('./sessionConfig');
const db = require('../shared/db/connectors/search');
const setupRoutes = require('./routes/routes');
const setupPassport = require('./passport/setup');

const PORT = 3000;
const bundleMap = {
  candidate: 'candidate',
  employer: 'employer',
  guest: 'guest'
};

const app = express();

app.use(express.static(path.join(__dirname, '../public/static')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(expressSession(sessionConfig));

const passport = setupPassport(app);
setupRoutes(app, passport);

function getUserType(req) {
  if (req && req.user && bundleMap[req.user.type]) {
    return bundleMap[req.user.type];
  }
  return bundleMap.guest;
}

// Define routes
app.get('/', (req, res) => {
  const userType = getUserType(req);
  console.log('sending', path.join(__dirname, `../public/${userType}.html`));
  res.sendFile(path.join(__dirname, `../public/${userType}.html`));
});

app.get('/api/latest', (req, res) => {
  db.latest().then((data) => {
    res.send(data);
  });
});

app.get('/api/search', (req, res) => {
  db.search(req.query).then((data) => {
    res.send(data);
  });
});

app.get('/api/districts', (req, res) => {
  db.getDistricts().then((data) => {
    res.send(data);
  });
});

app.get('/api/contractTypes', (req, res) => {
  db.getContractTypes().then((data) => {
    res.send(data);
  });
});

// catch 404's
app.use((req, res) => {
  console.log('404 in', req.originalUrl);
  res.status(404).send('Not found');
});

// Error-handling middleware must provide four arguments to
// identify it as an error-handling middleware function
app.use((err, req, res, next) => {  // eslint-disable-line no-unused-vars
  console.log('caught error', err);
  res.send({
    success: false,
    msg: err.msg
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`);
});
