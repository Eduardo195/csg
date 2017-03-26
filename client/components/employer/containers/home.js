import { connect } from 'react-redux';
import { getIsEmployer } from 'components/user/selectors/sessionSelectors';
import { getAll } from 'components/opportunity/actions/employerActions';
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
