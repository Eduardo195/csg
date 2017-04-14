import { connect } from 'react-redux';
import ApplicationsShort from '../applicationsShort';
import { getApplicationsError, getApplications } from '../selectors/selectors';

function mapStateToProps(state) {
  return {
    applications: getApplications(state),
    error: getApplicationsError(state),
  };
}

export default connect(mapStateToProps)(ApplicationsShort);
