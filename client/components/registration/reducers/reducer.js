import { combineReducers } from 'redux';
import * as actionTypes from 'components/registration/actions/actionTypes';

function registrationErrors(state = null, action) {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return action.msg;

    case actionTypes.CLEAR_ERROR:
      return null;

    default:
      return state;
  }
}

function registrationSuccess(state = false, action) {
  switch (action.type) {

    case actionTypes.SET_INVALID_EMAIL:
      return false;

    case actionTypes.SET_INVALID_PASSWORD:
      return false;

    case actionTypes.REGISTRATION_SUCCESS:
      return true;

    default:
      return state;
  }
}

function captcha(state = null, action) {
  switch (action.type) {

    case actionTypes.SET_CAPTCHA:
      return action.captcha;

    default:
      return state;
  }
}

function hash(state = null, action) {
  switch (action.type) {

    case actionTypes.SET_HASH_IS_VALID:
      return Object.assign({}, state, {
        isValid: action.isValid,
      });

    case actionTypes.SET_HASH_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });

    default:
      return state;
  }
}

function email(state = null, action) {
  switch (action.type) {

    case actionTypes.SET_REGISTRATION_EMAIL:
      return action.email;

    default:
      return state;
  }
}

export default combineReducers({
  captcha,
  registrationErrors,
  registrationSuccess,
  hash,
  email,
});
