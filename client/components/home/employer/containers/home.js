import { connect } from 'react-redux';
import { getAll, getApplications } from 'components/opportunity/actions/employerActions';
import Home from '../home';

function mapDispatchToProps(dispatch) {
  return {
    getMyOpportunities() {
      dispatch(getAll());
      dispatch(getApplications());
    },
  };
}

export default connect(null, mapDispatchToProps)(Home);
