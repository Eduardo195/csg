import { connect } from 'react-redux';
import { deleteOpportunity } from 'components/opportunity/actions/employerActions';
import Button from 'components/button/button';

function mapDispatchToProps(dispatch) {
  return {
    onTap(e) {
      dispatch(deleteOpportunity(e.target.getAttribute('data-value')));
    },
  };
}

export default connect(null, mapDispatchToProps)(Button);
