const MIN_LENGTH = 3;
const MAX_LENGTH = 25;
const REGEX = /\S+@\S+\.\S+/;

function validator(email) {
  let msg = null;

  if (!email || email.length < MIN_LENGTH) {
    msg = `email too small - min ${MIN_LENGTH} characters`;
  } else if (email.length > MAX_LENGTH) {
    msg = `email too big - max ${MAX_LENGTH} characters`;
  } else if (!REGEX.test(email)) {
    msg = 'Wooops - That doesn\'t look like a valid email';
  }

  return msg;
}

export default validator;
