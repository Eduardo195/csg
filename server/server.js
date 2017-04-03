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
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(expressSession(sessionConfig));

const passport = setupPassport(app);
setupRoutes(app, passport);

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
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

app.use((err, req, res, extra1, extra2) => {
  if (err.code && err.msg) {
    res.send(err.code, err.msg);
  }
  res.send(500, 'Unknows error (0x000000)');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`);
});
