import { connect } from 'react-redux';
import { logout } from 'components/user/actions/userActions';
import { showDialog } from 'components/dialog/actions/dialogActions';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Nav from '../nav';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getUsername(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log('ownProps :::', ownProps);
    return {
        logout(router) {
            dispatch(logout());
            router.push('/');
        },
        showDialog() {
            dispatch(showDialog('register', {}));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
