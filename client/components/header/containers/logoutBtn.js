import { connect } from 'react-redux';
import { logout } from 'components/user/actions/userActions';
import Button from 'components/button/button';

function mapDispatchToProps(dispatch) {
  return {
    onTap() {
      dispatch(logout());
    },
  };
}

export default connect(null, mapDispatchToProps)(Button);
