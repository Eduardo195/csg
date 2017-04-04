import { connect } from 'react-redux';
import { getAge } from 'components/filters/selectors/filterSelectors';
import { setAge } from 'components/filters/actions/filterActions';
import AgeFilter from 'components/input/dropdownGroup';

const options = [{
  label: 'Any Time',
  id: '*',
}, {
  label: 'Past Hour',
  id: 'h',
}, {
  label: 'Past Day',
  id: 'd',
}, {
  label: 'Past Week',
  id: 'w',
}, {
  label: 'Past Month',
  id: 'm',
}];

function mapStateToProps(state) {
  return {
    options,
    selected: getAge(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(age) {
      dispatch(setAge(age));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeFilter);
