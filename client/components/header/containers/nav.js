import { connect } from 'react-redux';
import { getNavItems } from 'components/header/selectors/navSelectors';
import Nav from '../nav';

function mapStateToProps(state) {
  return {
    navItems: getNavItems(state),
  };
}

export default connect(mapStateToProps)(Nav);
