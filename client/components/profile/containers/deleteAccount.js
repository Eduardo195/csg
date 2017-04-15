import { connect } from 'react-redux';
import { deleteAccount } from 'components/user/actions/actions';
import DeleteAccount from '../deleteAccount';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit() {
      dispatch(deleteAccount());
    },
  };
}

export default connect(null, mapDispatchToProps)(DeleteAccount);
