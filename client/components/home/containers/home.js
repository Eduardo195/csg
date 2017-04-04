import { connect } from 'react-redux';
import { getIsEmployer, getIsCandidate } from 'components/user/selectors/sessionSelectors';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: getIsEmployer(state),
    isCandidate: getIsCandidate(state),
  };
}

export default connect(mapStateToProps)(Home);
