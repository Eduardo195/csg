const MIN_LENGTH = 8;
const MAX_LENGTH = 25;

function validator(password) {
  let msg = null;

  if (!password || password.length < MIN_LENGTH) {
    msg = `Password too small - min ${MIN_LENGTH} characters`;
  } else if (password.length > MAX_LENGTH) {
    msg = `Password too big - max ${MAX_LENGTH} characters`;
  }

  return msg;
}

export default validator;
