import { connect } from 'react-redux';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: state.user,
  };
}

export default connect(mapStateToProps)(Home);
