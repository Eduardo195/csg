const path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const local = require('./auth/local');
const db = require('../shared/db/searchConnector');

const PORT = 3000;

passport.use('local-login', new LocalStrategy(
    {passReqToCallback : true},
    (req, username, password, done) => {
      local.login(username, password).then((user) => {
        console.log('USER: ', user);
        done(null, user);
      }).catch(function (err){
        console.log('Failed to login', err);
      });
    })
);

passport.use('local-register', new LocalStrategy(
    {passReqToCallback : true},
    (req, username, password, done) => {
      local.register(username, password).then((user) => {
        console.log('USER: ', user);
        done(null, user);
      }).catch(function (err){
        console.log('Failed to register', err);
      });
    })
);

passport.serializeUser(function(user, cb) {
  console.log('serializing', user, cb);
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  console.log(`deserializing ${id}`);
  local.findById(id).then(user => {
    console.log(`user ::::`, user);
    if(user){
      cb(null, user);
    } else {
      cb('USER NOUT FOUND')
    }
  });
});

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/register', passport.authenticate('local-register'),(req, res) => {
  res.send(req.user);
});

app.post('/api/login', passport.authenticate('local-login'),
  (req, res) => {
    console.log('returning user details', req.user);
    res.send(req.user);
  }
);

app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ status: true });
  }
);

//TODO
app.get('/api/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    res.send(req.user);
  }
);

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

app.get('/op/:id', (req, res) => {
  db.getByRef(req.params.id).then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`);
});
