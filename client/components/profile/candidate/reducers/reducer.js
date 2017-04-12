import { combineReducers } from 'redux';
import personal from 'components/profile/candidate/reducers/personal';
import professional from 'components/profile/candidate/reducers/professional';
import employerVisibility from 'components/profile/candidate/reducers/employerVisibility';
import cv from 'components/cvs/reducers/reducer';
import * as types from '../actions/types';

function isLoading(state = false, action) {
  switch (action.type) {

    case types.SET_PROFILE_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {

    case types.SET_PROFILE_ERROR:
      return action.error;

    default:
      return state;
  }
}

export default combineReducers({
  query: combineReducers({
    isLoading,
    error,
  }),
  cv,
  personal,
  professional,
  employerVisibility,
});
