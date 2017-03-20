import { connect } from 'react-redux';
import { requestPasswordReset } from 'components/password/actions/actions';
import Reset from '../reset';

function mapDispatchToProps(dispatch) {
  return {
    requestPasswordReset(email) {
      dispatch(requestPasswordReset(email));
    },
  };
}

export default connect(null, mapDispatchToProps)(Reset);
