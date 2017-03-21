const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const sessionConfig = require('./sessionConfig');
const AuthLocal = require('./auth/local');
const db = require('../shared/db/connectors/search');
const CaptchaService = require('./services/captcha/captcha');
const mailer = require('./services/mailer/mailer');

const PORT = 3000;

passport.serializeUser((user, cb) => {
  console.log('serializing', user, cb);
  cb(null, user._id); // eslint-disable-line no-underscore-dangle
});

passport.deserializeUser((id, cb) => {
  console.log(`deserializing ${id}`);
  AuthLocal.user.findById(id).then((user) => {
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

passport.use('local-login', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      AuthLocal.user.login(username, password).then((res) => {
        if (res.success) {
          done(null, res.user);
        } else {
          done(null, false, res);
        }
      }).catch((err) => {
        done(null, false, err);
      });
    })
);

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => { // eslint-disable-line consistent-return
    if (err) {
      return next(err); // Throws a 500 error
    }
    if (!user) {
      return res.send({ success: false, err: info.msg });
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);  // Throw 500
      }
      return res.send({ success: true, user });
    });
  })(req, res, next);
}); // app end

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/register/employer', (req, res) => {
  AuthLocal.employer.register(
    req.body.captcha, req.body.username, req.body.password, req.body.nif
  ).then((email) => {
    res.send({ success: true, email });
  }).catch((err) => {
    res.send({ success: false, msg: err && err.msg });
  });
});

app.post('/api/register/user', (req, res) => {
  CaptchaService.verify(req.body.captcha).then(() => {
    const { username, password } = req.body;
    return AuthLocal.user.register(username, password).then((confHash) => {
      return mailer.sendConfirmationEmail(username, confHash);
    });
  }).then(() => {
    res.send({ success: true });
  }).catch((err) => {
    console.log(err);
    res.send({ success: false, msg: err.msg });
  });
});

app.get('/api/confirmEmail/:hash', (req, res) => {
  AuthLocal.user.verifyAccount(req.params.hash).then(() => {
    res.send({ success: true });
  }).catch((err) => {
    res.send({ success: false, msg: err && err.msg });
  });
});

app.get('/api/password/reset', (req, res) => {
  AuthLocal.user.requestResetLink(req.query.email)
    .then((hash) => {
      res.send({ success: true });
      mailer.sendResetPasswordEmail(req.query.email, hash);
    }).catch((err) => {
      res.send({ success: false, msg: err });
    });
});

app.post('/api/password/reset', (req, res) => {
  AuthLocal.user.resetPassword(req.body.email, req.body.password, req.body.hash).then(() => {
    res.send({ success: true });
  }).catch((err) => {
    res.send({ success: false, msg: err.msg });
  });
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.send({ status: true });
});

app.delete('/api/user/', (req, res) => {
  if (!req.user) {
    res.send({ status: false, msg: 'Not logged in' });
  }
  AuthLocal.user.deleteUser(req.user._id)
    .then(status => res.send({ status: status.result.n === 1 }))
    .catch(() => res.send({ status: false, msg: `ERROR DELETING ${req.user._id}` }))
    .then(() => {
      req.logout();
    });
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

app.get('/op/:id', (req, res) => {
  db.getByRef(req.params.id).then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`);
});
