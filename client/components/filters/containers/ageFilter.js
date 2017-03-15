import { connect } from 'react-redux';
import { getAge } from 'components/filters/selectors/filterSelectors';
import { setAge } from 'components/filters/actions/filterActions';
// import AgeFilter from 'components/filters/dropdownSelector';
import AgeFilter from 'components/input/dropdownGroup';

const options = [{
  label: 'Any Time',
  value: '*',
}, {
  label: 'Past Hour',
  value: 'h',
}, {
  label: 'Past Day',
  value: 'd',
}, {
  label: 'Past Week',
  value: 'w',
}, {
  label: 'Past Month',
  value: 'm',
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
