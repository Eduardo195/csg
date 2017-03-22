if(process.env.USER_TYPE === "employer") {
  module.exports = require('./employer');
} else if(process.env.USER_TYPE === "user") {
  module.exports = require('./user');
} else {
  module.exports = require('./base');
}
