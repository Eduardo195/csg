import * as actionTypes from './types';

export function showDialog(componentId, config) {
  return {
    type: actionTypes.SHOW_DIALOG,
    componentId,
    config,
  };
}

export function hideDialog() {
  return {
    type: actionTypes.HIDE_DIALOG,
  };
}
