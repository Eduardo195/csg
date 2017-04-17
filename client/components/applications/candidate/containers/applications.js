import { connect } from 'react-redux';
import Applications from '../applications';
import { getCandidateApplications } from '../actions/actions';
import { getApplicationsError, getApplications } from '../selectors/selectors';

function mapStateToProps(state) {
  return {
    applications: getApplications(state),
    error: getApplicationsError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(getCandidateApplications());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
