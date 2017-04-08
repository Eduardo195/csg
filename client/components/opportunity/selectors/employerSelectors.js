export const getOpportunitySubmissionErrors = state => state.opportunity;
export const getMyOpportunitiesError = state => state.myOpportunities.error;
export const getMyOpportunities = state => state.myOpportunities.opportunities;

export const getUpdateError = state => state.updateOpportunity &&
  state.updateOpportunity.error;
export const getUpdateSuccess = state => state.updateOpportunity &&
  state.updateOpportunity.id;
