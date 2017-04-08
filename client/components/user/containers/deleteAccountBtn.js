import { connect } from 'react-redux';
import { deleteAccount } from 'components/user/actions/actions';
import DeleteAccountBtn from '../deleteAccountBtn';

function mapDispatchToProps(dispatch) {
  return {
    deleteAccount() {
      dispatch(deleteAccount());
    },
  };
}

export default connect(null, mapDispatchToProps)(DeleteAccountBtn);
