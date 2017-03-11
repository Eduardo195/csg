import { connect } from 'react-redux';
import { getResults, getResultCount } from 'components/search/selectors/searchSelectors';
import Search from '../search';

function mapStateToProps(state) {
    return {
        results: getResults(state),
        resultCount: getResultCount(state),
    };
}

export default connect(mapStateToProps)(Search);
