/* eslint import/prefer-default-export: 0 */
import * as types from '../actions/types';

export function setOverlayVisibility(isVisible) {
  return {
    type: types.SET_OVERLAY_VISIBILITY,
    isVisible,
  };
}
