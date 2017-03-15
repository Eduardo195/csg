import { connect } from 'react-redux';
import { addKeyword, setLocations, addLocation } from 'components/filters/actions/filterActions';
import { getLocations } from 'components/filters/selectors/filterSelectors';
import { convertToMap } from 'components/filters/helpers/helpers';
import SearchService from 'services/search/searchService';
import MainNav from '../mainSearch';

// TODO: kill with fire
const toFlatArr = values => values.map(entry => entry.label);

function mapStateToProps(state) {
  return {
    locations: toFlatArr(getLocations(state)),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search(keyword, location) {
            // TODO: move
      if (keyword) {
        dispatch(addKeyword(keyword));
      }
      if (location) {
        dispatch(addLocation(location));
      }
    },
    handleMount() {
      SearchService.getDistricts().then((locations) => {
        dispatch(setLocations(convertToMap(locations)));
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
