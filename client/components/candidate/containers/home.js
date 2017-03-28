import { connect } from 'react-redux';
// import { getApplication } from 'components/user/selectors/sessionSelectors';
import { getCandidateApplications } from 'components/applications/actions/candidateActions';
import Home from '../home';

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(getCandidateApplications());
    },
  };
}

export default connect(null, mapDispatchToProps)(Home);
