import { connect } from 'react-redux';
import { resetPassword } from 'components/password/actions/actions';
import { getsubmissionStatus } from 'components/password/selectors/selectors';
import ResetForm from '../resetForm';

function mapStateToProps(state) {
  const submissionStatus = getsubmissionStatus(state);
  return {
    success: submissionStatus && submissionStatus.success,
    error: submissionStatus && submissionStatus.msg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetPassword(email, pass, hash) {
      dispatch(resetPassword(email, pass, hash));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetForm);
