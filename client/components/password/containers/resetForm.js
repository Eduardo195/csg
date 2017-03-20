import { connect } from 'react-redux';
import { resetPassword } from 'components/password/actions/actions';
import ResetForm from '../resetForm';

function mapDispatchToProps(dispatch) {
  return {
    resetPassword(email, pass, hash) {
      dispatch(resetPassword(email, pass, hash));
    },
  };
}

export default connect(null, mapDispatchToProps)(ResetForm);
