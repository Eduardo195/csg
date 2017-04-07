import { connect } from 'react-redux';
import { addKeyword, search } from 'components/filters/actions/filterActions';
import KeywordFilter from 'components/filters/keywordFilter';

function mapDispatchToProps(dispatch) {
  return {
    handleAdd(value) {
      dispatch(addKeyword(value));
      dispatch(search());
    },
  };
}

export default connect(null, mapDispatchToProps)(KeywordFilter);
