const MAX_LENGTH = 255;

function validator(name) {
  let msg = null;

  if (!name) {
    return msg; // empty name is ok
  }

  if (name.length > MAX_LENGTH) {
    msg = `Sorry, that's too big - max ${MAX_LENGTH} characters`;
  }

  return msg;
}

export default validator;
