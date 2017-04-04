import { connect } from 'react-redux';
import { getMyOpportunities, getMyOpportunitiesError } from 'components/opportunity/selectors/employerSelectors';
import Opportunities from '../opportunities';

function mapStateToProps(state) {
  return {
    opportunities: getMyOpportunities(state),
    error: getMyOpportunitiesError(state),
  };
}

export default connect(mapStateToProps)(Opportunities);
