/* eslint import/prefer-default-export: 0 */
import ApplicationsService from 'services/applications/candidate';
import * as types from './types';

function setApplicationsError(error) {
  return {
    type: types.SET_APPLICATIONS_ERROR,
    error,
  };
}

function clearApplicationsStatus() {
  return {
    type: types.CLEAR_APPLICATIONS_STATUS,
  };
}

function setApplications(applications) {
  return {
    type: types.SET_APPLICATIONS,
    applications,
  };
}

export function getCandidateApplications() {
  return (dispatch) => {
    dispatch(clearApplicationsStatus());
    ApplicationsService.getAll().then((rsp) => {
      if (!rsp.success) {
        dispatch(setApplicationsError(`${rsp.msg}`));
      } else {
        dispatch(setApplications(rsp.applications));
      }
    }).catch((err) => {
      dispatch(setApplicationsError(`${err.status} - ${err.statusText}`));
    });
  };
}
