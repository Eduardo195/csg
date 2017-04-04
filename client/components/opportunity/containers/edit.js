import { connect } from 'react-redux';
import { getUpdateError } from 'components/opportunity/selectors/employerSelectors';
import { update } from '../actions/employerActions';
import Edit from '../edit';

function mapStateToProps(state) {
  return {
    error: getUpdateError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(opportunity) {
      dispatch(update(opportunity));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
