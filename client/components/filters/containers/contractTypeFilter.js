import { connect } from 'react-redux';
import * as actions from 'components/filters/actions/filterActions';
import { getContractTypes, getSelectedContractTypes } from 'components/filters/selectors/filterSelectors';
import CheckboxGroup from 'components/input/checkboxGroup';
import SearchService from 'services/search/searchService';
import { convertToMap } from '../helpers/helpers';

function mapStateToProps(state) {
  return {
    items: getContractTypes(state),
    selected: getSelectedContractTypes(state),
    name: 'contractTypes',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMount() {
      SearchService.getContractTypes().then((locations) => {
        dispatch(actions.setContractTypes(convertToMap(locations)));
      });
    },
    handleChange(value, isActive) {
      if (isActive) {
        dispatch(actions.addContractType(+value));
      } else {
        dispatch(actions.removeContractType(+value));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);
