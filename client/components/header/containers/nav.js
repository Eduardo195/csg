import { connect } from 'react-redux';
import { getSession } from 'components/user/selectors/sessionSelectors';
import * as userActions from 'components/user/actions/userActions';
import { showDialog } from 'components/dialog/actions/dialogActions';
import Nav from '../nav';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout() {
            dispatch(userActions.endSession());
        },
        showDialog() {
            dispatch(showDialog('register', {}));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
