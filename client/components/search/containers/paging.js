import { connect } from 'react-redux';
import { getResultCount, getPage, getItemsPerPage } from 'components/search/selectors/searchSelectors';
import { setPage } from 'components/search/actions/pagingActions';
import { search } from 'components/filters/actions/filterActions';
import Paging from '../paging';

function mapStateToProps(state) {
    return {
        cp: getPage(state),
        itemCount: getResultCount(state),
        itemsPerPage: getItemsPerPage(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changePage(e) {
            dispatch(setPage(+e.target.getAttribute('data-value')));
            dispatch(search(true));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paging);
