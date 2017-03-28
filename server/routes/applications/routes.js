const candidate = require('./candidate');
// const employer = require('./employer');

function setup(app) {
  candidate(app);
}

module.exports = setup;
