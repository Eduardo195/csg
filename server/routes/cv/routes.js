const candidate = require('./candidate');
// const employer = require('./employer');

function setup(app) {
  candidate(app);
  // employer(app);
}

module.exports = setup;
