import { combineReducers } from 'redux';
import * as actionTypes from 'components/registration/actions/actionTypes';

function submissionErrors(state = null, action) {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return action.msg;

    case actionTypes.CLEAR_ERRORS:
      return null;

    default:
      return state;
  }
}

function validationErrors(state = null, action) {
  switch (action.type) {

    case actionTypes.SET_INVALID_EMAIL:
      return Object.assign({}, state, {
        email: action.msg,
      });

    case actionTypes.SET_INVALID_PASSWORD:
      return Object.assign({}, state, {
        password: action.msg,
      });

    case actionTypes.CLEAR__VALIDATION_ERRORS:
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


export default combineReducers({
  submissionErrors,
  validationErrors,
  registrationSuccess,
});
