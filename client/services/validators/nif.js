const LENGTH = 9;
const REGEX = /^[0-9]+$/;

function validator(nif) {
  let msg = null;

  if (!nif || nif.length < LENGTH) {
    msg = `NIF too small - must have ${LENGTH} numbers`;
  } else if (nif.length > LENGTH) {
    msg = `NIF too big - must have ${LENGTH} characters`;
  } else if (!REGEX.test(nif)) {
    msg = 'Wooops - That doesn\'t look like a valid NIF';
  }

  return msg;
}

export default validator;
