/* eslint import/prefer-default-export: 0 */
export const getOpportunitySubmissionErrors = state => state.submissions.opportunity;
export const getMyOpportunitiesError = state => state.myOpportunities.error;
export const getMyOpportunities = state => state.myOpportunities.opportunities;

export const getUpdateError = state => state.submissions.updateOpportunity &&
  state.submissions.updateOpportunity.error;
export const getUpdateSuccess = state => state.submissions.updateOpportunity &&
  state.submissions.updateOpportunity.id;
