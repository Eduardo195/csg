import * as types from '../actions/types';

function overlay(state = true, action) {
  switch (action.type) {
    case types.SET_OVERLAY_VISIBILITY:
      return action.isVisible;

    default:
      return state;
  }
}

export default overlay;
