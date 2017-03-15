import { connect } from 'react-redux';
import { search } from 'components/filters/actions/filterActions';
import Filters from '../filters';

function mapDispatchToProps(dispatch) {
  return {
    search() {
      dispatch(search());
    },
  };
}

export default connect(null, mapDispatchToProps)(Filters);
