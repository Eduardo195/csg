import * as types from '../actions/types';

export function setOverlayVisibility(isVisible) {
  return {
    type: types.SET_OVERLAY_VISIBILITY,
    isVisible,
  };
}
