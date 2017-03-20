import { connect } from 'react-redux';
import { logout } from 'components/user/actions/userActions';
import LogoutBtn from '../logoutBtn';

function mapDispatchToProps(dispatch) {
  return {
    logout() {
      dispatch(logout());
    },
  };
}

export default connect(null, mapDispatchToProps)(LogoutBtn);
