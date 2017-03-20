import $ from 'jquery';
import { hashHistory } from 'react-router';
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

export function setRegistrationSuccess() {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
  };
}

export function setCaptcha(captcha) {
  return {
    type: actionTypes.SET_CAPTCHA,
    captcha,
  };
}

export function setHashIsValid(isValid) {
  return {
    type: actionTypes.SET_HASH_IS_VALID,
    isValid,
  };
}

export function setHashIsLoading(isLoading) {
  return {
    type: actionTypes.SET_HASH_IS_LOADING,
    isLoading,
  };
}

export function validateEmailHash(hash) {
  return (dispatch) => {  // eslint-disable-line consistent-return
    if (!hash) {
      return dispatch(setHashIsValid(false));
    }
    dispatch(setHashIsLoading(true));
    $.ajax({
      url: `/api/confirmEmail/${hash}`,
    }).fail(() => {
      dispatch(setHashIsValid(false));
    }).done((res) => {
      if (res.success) {
        dispatch(setHashIsValid(true));
      } else {
        dispatch(setHashIsValid(false));
      }
    }).always(() => {
      dispatch(setHashIsLoading(false));
    });
  };
}

export function register(username, password) {
  return (dispatch, getState) => {
    dispatch(clearRegError());
    const captcha = getState().registration.captcha;
    $.ajax({
      url: '/api/register',
      method: 'POST',
      data: { username, password, captcha },
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
        hashHistory.push('/registration/success');
      } else if (res.msg) {
        dispatch(setServerError(res.msg));
      }
    });
  };
}
