import { connect } from 'react-redux';
import { getLocations, getContractTypes } from 'components/filters/selectors/filterSelectors';
import { getUpdateError } from 'components/opportunity/selectors/employerSelectors';
import { update } from '../actions/employerActions';
import Create from '../create';

function mapStateToProps(state) {
  return {
    error: getUpdateError(state),
    locations: getLocations(state),
    contractTypes: getContractTypes(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit(opportunity) {
      opportunity.id = ownProps.id; // eslint-disable-line no-param-reassign
      dispatch(update(opportunity));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
