import $ from 'jquery';
import CVS from 'services/credentialValidatorService';
import * as actionTypes from './actionTypes';

export function setServerError(msg) {
  return {
    type: actionTypes.SERVER_ERROR,
    msg,
  };
}

export function setServerErrorRegError() {
  return {
    type: actionTypes.SERVER_ERROR,
    msg: 'Server error - that\'s all we know - Sorry!',
  };
}

export function setServerErrorBadCredentials() {
  return {
    type: actionTypes.SERVER_ERROR,
    msg: 'Please check your credentials',
  };
}

export function clearRegError() {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
}


export function setInvalidUsernameMessage(msg) {
  return {
    type: actionTypes.SET_INVALID_EMAIL,
    msg,
  };
}

export function setInvalidPasswordMessage(msg) {
  return {
    type: actionTypes.SET_INVALID_PASSWORD,
    msg,
  };
}

export function setRegistrationSuccess() {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
  };
}

export function register(username, password) {
  return (dispatch) => {
    const credentials = CVS.validate(username, password);
    const { usernameError, pwdError } = credentials;

    dispatch(setInvalidUsernameMessage(usernameError));
    dispatch(setInvalidPasswordMessage(pwdError));
    dispatch(clearRegError());

    if (!usernameError && !pwdError) {
      $.ajax({
        url: '/api/register',
        method: 'POST',
        data: { username, password },
      }).fail((req) => {
        if (req.status === 401) { // invalid params
              // invalid credentials - user likely went around our validation. Naughty boy
          dispatch(setServerErrorBadCredentials());
        } else if (req.status === 500) {
              // server broke while processing
          dispatch(setServerErrorRegError());
        }
      }).done((res) => {
        if (res.success) {
          dispatch(setRegistrationSuccess());
        } else if (res.msg) {
          dispatch(setServerError(res.msg));
        }
      });
    }
  };
}
