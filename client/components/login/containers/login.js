import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from 'components/user/actions/userActions';
import { getSession } from 'components/user/selectors/sessionSelectors';
import Login from '../login';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createSession(username, password) {
            // dispatch(actions.enterBusyState());
            $.ajax({
                url: '/user/login',
                method: 'POST',
                data: {
                    username,
                    password,
                },
            }).done((rsp) => {
                dispatch(actions.createSession());
                console.log('login rsp ::: ', rsp);
                // dispatch(actions.leaveBusyState());
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
