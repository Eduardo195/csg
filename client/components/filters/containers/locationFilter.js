import { connect } from 'react-redux';
import * as actions from 'components/filters/actions/filterActions';
import { getLocations, getSelectedLocations } from 'components/filters/selectors/filterSelectors';
import CheckboxGroup from 'components/input/checkboxGroup';
import SearchService from 'services/search/searchService';
import { convertToMap } from '../helpers/helpers';

function mapStateToProps(state) {
    return {
        items: getLocations(state),
        selected: getSelectedLocations(state),
        name: 'locations',
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleMount() {
            SearchService.getDistricts().then((locations) => {
                dispatch(actions.setLocations(convertToMap(locations)));
            });
        },
        handleChange(value, isActive) {
            if (isActive) {
                dispatch(actions.addLocation(+value));
            } else {
                dispatch(actions.removeLocation(+value));
            }
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);
