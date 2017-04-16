import { connect } from 'react-redux';
import { login, clearLoginError } from 'components/login/actions/actions';
import { getLoginError } from 'components/login/selectors/selectors';
import Login from '../login';

function mapStateToProps(state) {
  return {
    error: getLoginError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login(user, pass) {
      dispatch(login(user, pass));
    },
    handleUnmount() {
      dispatch(clearLoginError());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
