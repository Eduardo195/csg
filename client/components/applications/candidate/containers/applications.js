import { connect } from 'react-redux';
import Applications from '../applications';
import { getApplicationsError, getApplications } from '../selectors/selectors';

function mapStateToProps(state) {
  return {
    applications: getApplications(state),
    error: getApplicationsError(state),
  };
}

export default connect(mapStateToProps)(Applications);
