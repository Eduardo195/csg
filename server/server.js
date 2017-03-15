const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const sessionConfig = require('./sessionConfig');
const local = require('./auth/local');
const db = require('../shared/db/searchConnector');
const CaptchaVerifier = require('./captcha/verifier');
const mailer = require('./mailer/mailer');

const PORT = 3000;

passport.use('local-login', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      local.login(username, password).then((user) => {
        console.log('USER: ', user);
        done(null, user);
      }).catch((err) => {
        console.log('Failed to login', err);
        done(null, false, { message: err });
      });
    })
);

passport.serializeUser((user, cb) => {
  console.log('serializing', user, cb);
  cb(null, user._id); // eslint-disable-line no-underscore-dangle
});

passport.deserializeUser((id, cb) => {
  console.log(`deserializing ${id}`);
  local.findById(id).then((user) => {
    console.log('user ::::', user);
    if (user) {
      cb(null, user);
    } else {
      cb('USER NOUT FOUND');
    }
  });
});

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/register', (req, res) => {
  CaptchaVerifier.verify(req.body.captcha).then(() => {
    const { username, password } = req.body;
    return local.registerUnconfirmed(username, password)
      .then(user => mailer.sendConfirmationEmail(username, user.confHash));
  }).then(() => {
    res.send({ success: true });
  }).catch((err) => {
    res.send({ success: false, msg: err.msg });
  });
});

app.get('/api/confirmEmail/:id', (req, res) => {
  local.checkHash(req.params.id).then(() => {
    res.send({ success: true });
  }).catch((err) => {
    res.send({ success: false, msg: err });
  });
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
});

// TODO
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
