import { connect } from 'react-redux';
import { getCandidateApplications } from 'components/applications/candidate/actions/actions';
import Home from '../home';

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(getCandidateApplications());
    },
  };
}

export default connect(null, mapDispatchToProps)(Home);
