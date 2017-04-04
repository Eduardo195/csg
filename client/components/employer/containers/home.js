import { connect } from 'react-redux';
import { getIsEmployer } from 'components/user/selectors/sessionSelectors';
import { getAll, getApplications } from 'components/opportunity/actions/employerActions';
import Home from '../home';

function mapStateToProps(state) {
  return {
    isEmployer: getIsEmployer(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMyOpportunities() {
      dispatch(getAll());
      dispatch(getApplications());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
