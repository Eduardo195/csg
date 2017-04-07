import { connect } from 'react-redux';
import { getKeywords } from 'components/filters/selectors/filterSelectors';
import { removeKeyword, search } from 'components/filters/actions/filterActions';
import KeywordList from 'components/filters/keywordList';

function mapStateToProps(state) {
  return {
    keywords: getKeywords(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRemove(value) {
      dispatch(removeKeyword(value));
      dispatch(search());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordList);
