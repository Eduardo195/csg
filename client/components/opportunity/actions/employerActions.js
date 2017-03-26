import { hashHistory } from 'react-router';
import { setOverlayVisibility } from 'components/overlay/actions/actions';
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
    dispatch(setOverlayVisibility(true));
    dispatch(clearOpportunitySubmissionError());
    OpportunityService.post(opportunity).then((rsp) => {
      if (!rsp.success) {
        dispatch(setOpportunitySubmissionError(`${rsp.msg}`));
      } else {
        hashHistory.push('/home');
      }
      dispatch(setOverlayVisibility(false));
    }).catch((err) => {
      dispatch(setOpportunitySubmissionError(`${err.status} - ${err.statusText}`));
      dispatch(setOverlayVisibility(false));
    });
  };
}

function setGetAllOpportunitiesSubmissionError(error) {
  return {
    type: actionTypes.SET_GET_ALL_ERROR,
    error,
  };
}

function clearGetAllOpportunitiesSubmissionError() {
  return {
    type: actionTypes.CLEAR_GET_ALL_ERROR,
  };
}

function setMyOpportunities(opportunities) {
  return {
    type: actionTypes.SET_MY_OPPORTUNITIES,
    opportunities,
  };
}

export function getAll() {
  return (dispatch) => {
    dispatch(clearGetAllOpportunitiesSubmissionError());
    OpportunityService.getAll().then((rsp) => {
      if (!rsp.success) {
        dispatch(setGetAllOpportunitiesSubmissionError(`${rsp.msg}`));
      } else {
        dispatch(setMyOpportunities(rsp.data));
      }
    }).catch((err) => {
      dispatch(setGetAllOpportunitiesSubmissionError(`${err.status} - ${err.statusText}`));
    });
  };
}

function setDeleteOpportunitySubmissionError(error) {
  return {
    type: actionTypes.SET_DELETE_ERROR,
    error,
  };
}

function clearDeleteOpportunitySubmissionError() {
  return {
    type: actionTypes.CLEAR_DELETE_ERROR,
  };
}

function setDeleteSuccess(id) {
  return {
    type: actionTypes.SET_DELETE_SUCCESS,
    id,
  };
}

export function deleteOpportunity(id) {
  return (dispatch) => {
    dispatch(clearDeleteOpportunitySubmissionError());
    OpportunityService.deleteOpportunity(id).then((rsp) => {
      if (!rsp.success) {
        dispatch(setDeleteOpportunitySubmissionError(`${rsp.msg}`));
      } else {
        dispatch(setDeleteSuccess(id));
      }
    }).catch((err) => {
      dispatch(setDeleteOpportunitySubmissionError(`${err.status} - ${err.statusText}`));
    });
  };
}
