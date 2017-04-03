import { connect } from 'react-redux';
import { getOpportunitySubmissionErrors } from 'components/opportunity/selectors/employerSelectors';
import { post } from '../actions/employerActions';
import EditableOpportunity from '../editableOpportunity';

function mapStateToProps(state) {
  return {
    error: getOpportunitySubmissionErrors(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(opportunity) {
      dispatch(post(opportunity));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableOpportunity);
