import { connect } from 'react-redux';
import { getResults, getResultCount } from 'components/search/selectors/searchSelectors';
import { search } from 'components/filters/actions/filterActions';
import SearchService from 'services/search/searchService';
import Search from '../search';

function mapStateToProps(state) {
    return {
        results: getResults(state),
        resultCount: getResultCount(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleMount() {
            dispatch(search());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
