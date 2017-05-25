import { connect } from 'react-redux';
import { getApplyError, getApplySuccess } from 'components/apply/selectors/selectors';
import { apply } from '../actions/actions';
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
