import { connect } from 'react-redux';
import { getIsEmployer, getIsCandidate } from 'components/user/selectors/sessionSelectors';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: getIsEmployer(state),
    iscandidate: getIsCandidate(state),
  };
}

export default connect(mapStateToProps)(Home);
