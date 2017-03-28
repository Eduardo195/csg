/* eslint import/prefer-default-export: 0 */

import { setOverlayVisibility } from 'components/overlay/actions/actions';
import ApplicationsService from 'services/applications/candidate';
import * as actionTypes from './candidateActionTypes';

function setApplicationsError(error) {
  return {
    type: actionTypes.SET_APPLICATIONS_ERROR,
    error,
  };
}

function clearApplicationsStatus() {
  return {
    type: actionTypes.CLEAR_APPLICATIONS_STATUS,
  };
}

function setApplications(applications) {
  return {
    type: actionTypes.SET_APPLICATIONS,
    applications,
  };
}

export function getCandidateApplications() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    dispatch(clearApplicationsStatus());
    ApplicationsService.getAll().then((rsp) => {
      if (!rsp.success) {
        dispatch(setApplicationsError(`${rsp.msg}`));
      } else {
        dispatch(setApplications(rsp.applications));
      }
      dispatch(setOverlayVisibility(false));
    }).catch((err) => {
      dispatch(setApplicationsError(`${err.status} - ${err.statusText}`));
      dispatch(setOverlayVisibility(false));
    });
  };
}
