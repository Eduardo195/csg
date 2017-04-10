/* eslint import/prefer-default-export: 0 */
import ProfileService from 'services/profile/candidate';
import * as types from './professionalTypes';

export function clearProfessionalQuery() {
  return {
    type: types.CLEAR_PROFESSIONAL_QUERY,
  };
}

function setProfessional(professional) {
  return {
    type: types.SET_PROFESSIONAL,
    professional,
  };
}

function setProfessionalError(error) {
  return {
    type: types.SET_PROFESSIONAL_ERROR,
    error,
  };
}

function setProfessionalSuccess(success) {
  return {
    type: types.SET_PROFESSIONAL_SUCCESS,
    success,
  };
}

function setProfessionalIsLoading(isLoading) {
  return {
    type: types.SET_PROFESSIONAL_IS_LOADING,
    isLoading,
  };
}

export function setProfessionalData(professional) {
  return (dispatch) => {
    dispatch(clearProfessionalQuery());
    dispatch(setProfessionalIsLoading(true));
    dispatch(setProfessionalError(null));
    ProfileService.setProfessional(professional).then((rsp) => {
      if (rsp.success) {
        dispatch(setProfessional(professional));
        dispatch(setProfessionalSuccess(true));
      } else {
        dispatch(setProfessionalError(rsp.msg));
      }
      dispatch(setProfessionalIsLoading(false));
    }).catch((err) => {
      dispatch(setProfessionalError(`${err.status} - ${err.statusText}`));
      dispatch(setProfessionalIsLoading(false));
    });
  };
}
