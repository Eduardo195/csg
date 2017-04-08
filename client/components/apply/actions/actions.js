/* eslint import/prefer-default-export: 0 */
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import OpportunityService from 'services/opportunity/candidate';
import * as types from './types';

function setApplyError(error) {
  return {
    type: types.SET_APPLY_ERROR,
    error,
  };
}

function clearApplyStatus() {
  return {
    type: types.CLEAR_APPLY_STATUS,
  };
}

function setApplySuccess(id) {
  return {
    type: types.SET_APPLY_SUCCESS,
    id,
  };
}

export function apply(opId) {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    dispatch(clearApplyStatus());
    OpportunityService.apply(opId).then((rsp) => {
      if (!rsp.success) {
        dispatch(setApplyError(`${rsp.msg}`));
      } else {
        dispatch(setApplySuccess(opId));
      }
      dispatch(setOverlayVisibility(false));
    }).catch((err) => {
      dispatch(setApplyError(`${err.status} - ${err.statusText}`));
      dispatch(setOverlayVisibility(false));
    });
  };
}
