import { connect } from 'react-redux';
import { getApplications, getApplicationsError } from '../selectors/selectors';
import Applications from '../applications';

function mapStateToProps(state) {
  return {
    applications: getApplications(state),
    error: getApplicationsError(state),
  };
}

export default connect(mapStateToProps)(Applications);
