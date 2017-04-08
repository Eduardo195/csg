
export const getApplyError = state => state.submissions.candidate.apply &&
  state.submissions.candidate.apply.error;
export const getApplySuccess = state => state.submissions.candidate.apply &&
  state.submissions.candidate.apply.success;
