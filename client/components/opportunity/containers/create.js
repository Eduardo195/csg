import { connect } from 'react-redux';
import { getLocations, getContractTypes } from 'components/filters/selectors/filterSelectors';
import { getOpportunitySubmissionErrors } from 'components/opportunity/selectors/employerSelectors';
import { post } from '../actions/employerActions';
import Create from '../create';

function mapStateToProps(state) {
  return {
    error: getOpportunitySubmissionErrors(state),
    locations: getLocations(state),
    contractTypes: getContractTypes(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(opportunity) {
      console.log('opportunity ::::', opportunity);
      dispatch(post(opportunity));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
