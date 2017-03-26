import { connect } from 'react-redux';
import { getIsEmployer } from 'components/user/selectors/sessionSelectors';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: getIsEmployer(state),
  };
}

export default connect(mapStateToProps)(Home);
