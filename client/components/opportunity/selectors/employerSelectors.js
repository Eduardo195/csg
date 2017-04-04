export const getOpportunitySubmissionErrors = state => state.submissions.opportunity;
export const getMyOpportunitiesError = state => state.myOpportunities.error;
export const getMyOpportunities = state => state.myOpportunities.opportunities;

export const getApplicationsError = state => state.applications.error;
export const getApplications = state => state.applications.applications;

export const getUpdateError = state => state.submissions.updateOpportunity &&
  state.submissions.updateOpportunity.error;
export const getUpdateSuccess = state => state.submissions.updateOpportunity &&
  state.submissions.updateOpportunity.id;
