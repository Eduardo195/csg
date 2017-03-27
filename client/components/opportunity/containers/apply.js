import { connect } from 'react-redux';
// import { getLocations, getContractTypes } from 'components/filters/selectors/filterSelectors';
import { getApplyError, getApplySuccess } from 'components/opportunity/selectors/candidate';
import { apply } from '../actions/candidateActions';
import Apply from '../apply';

function mapStateToProps(state) {
  return {
    error: getApplyError(state),
    success: getApplySuccess(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit() {
      dispatch(apply(ownProps.params.id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
