const errors = require('./errors');

module.exports = {
  validate(op) {
    return new Promise((resolve, reject) => {
      if (!op || typeof op !== 'object') {
        console.log(op);
        reject(errors.INVALID_PARAMS);
      } else if (!op.title || op.title.length <= 0) {
        reject(errors.INVALID_TITLE);
      } else if (!op.markdown || op.markdown.length <= 0) {
        reject(errors.INVALID_DESCRIPTION);
      } else {
        // TODO: sanitize
        console.warn('sanitize opportunity');
        resolve(op);
      }
    });
  }
};
