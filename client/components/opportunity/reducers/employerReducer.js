import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

function error(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.error;

    case actionTypes.CLEAR_ERROR:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
//  captcha,
  error,
//  validationErrors,
//  registrationSuccess,
//  hash,
});
