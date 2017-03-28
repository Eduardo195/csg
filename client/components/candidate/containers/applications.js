import { connect } from 'react-redux';
import { getApplicationsError, getApplications } from 'components/applications/selectors/candidate';
import Applications from '../applications';

function mapStateToProps(state) {
  return {
    applications: getApplications(state),
    error: getApplicationsError(state),
  };
}

export default connect(mapStateToProps)(Applications);
