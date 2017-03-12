import { connect } from 'react-redux';
import * as actions from 'components/latest/actions/latestActions';
import SearchService from 'services/search/searchService';
import Latest from '../latest';

function mapStateToProps(state) {
    return {
        items: state.latest,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleMount() {
            SearchService.getLatest().then((latest) => {
                dispatch(actions.setLatest(latest));
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Latest);
