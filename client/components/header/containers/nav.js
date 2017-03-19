import { connect } from 'react-redux';
import { showDialog } from 'components/dialog/actions/dialogActions';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Nav from '../nav';

function mapStateToProps(state) {
  return {
    isLoggedIn: !!getUsername(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showDialog() {
      dispatch(showDialog('register', {}));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
