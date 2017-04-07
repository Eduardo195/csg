import { connect } from 'react-redux';
import { addLocation, removeLocation, search } from 'components/filters/actions/filterActions';
import { getLocations, getSelectedLocations } from 'components/filters/selectors/filterSelectors';
import CheckboxGroup from 'components/input/checkboxGroup';

function mapStateToProps(state) {
  return {
    items: getLocations(state),
    selected: getSelectedLocations(state),
    name: 'locations',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(value, isActive) {
      if (isActive) {
        dispatch(addLocation(+value));
      } else {
        dispatch(removeLocation(+value));
      }
      dispatch(search());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);
