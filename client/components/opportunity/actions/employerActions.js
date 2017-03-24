/* eslint import/prefer-default-export: 0 */
import OpportunityService from 'services/opportunity/employer';
import * as actionTypes from './types';

function setOpportunitySubmissionError(error) {
  return {
    type: actionTypes.SET_ERROR,
    error,
  };
}

function clearOpportunitySubmissionError() {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
}

export function post(opportunity) {
  return (dispatch) => {
    dispatch(clearOpportunitySubmissionError());
    OpportunityService.post(opportunity).then((rsp) => {
      if (!rsp.success) {
        dispatch(setOpportunitySubmissionError(`${rsp.msg}`));
      } else {
        console.log('GREAT SUCCESS');
      }
    }).catch((err) => {
      dispatch(setOpportunitySubmissionError(`${err.status} - ${err.statusText}`));
    });
  };
}
