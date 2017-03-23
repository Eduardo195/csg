import { connect } from 'react-redux';
import { logout } from 'components/user/actions/userActions';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: state.user,
  };
}

export default connect(mapStateToProps)(Home);
