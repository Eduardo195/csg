import $ from 'jquery';
import * as types from './types';

function setSubmissionStatus(success, msg) {
  return {
    type: types.SET_SUBMISSION_STATUS,
    status: {
      success,
      msg,
    },
  };
}

export function resetPassword(email, password, hash) {
  return (dispatch) => {
    $.ajax({
      url: '/api/password/reset',
      data: { email, password, hash },
      method: 'POST',
    }).done((rsp) => {
      dispatch(setSubmissionStatus(rsp.success, rsp.msg));
    }).fail(() => {
      dispatch(setSubmissionStatus(false, 'Unknown error'));
    });
  };
}

export function requestPasswordReset(email) {
  return () => {
    $.ajax({
      url: '/api/password/reset',
      data: { email },
    }).done(() => {
      console.log('done');  // eslint-disable-line no-console
    }).fail((err) => {
      console.error('error', err);    // eslint-disable-line no-console
    });
  };
}
