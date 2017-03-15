import { connect } from 'react-redux';
import { addKeyword } from 'components/filters/actions/filterActions';
import KeywordFilter from 'components/filters/keywordFilter';

function mapDispatchToProps(dispatch) {
  return {
    handleAdd(value) {
      dispatch(addKeyword(value));
    },
  };
}

export default connect(null, mapDispatchToProps)(KeywordFilter);
