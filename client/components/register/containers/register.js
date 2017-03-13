import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from 'components/user/actions/userActions';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Register from '../register';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getUsername(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register(username, password) {
            $.ajax({
                url: '/api/register',
                method: 'POST',
                data: { username, password },
            }).done((rsp) => {
                // dispatch(actions.createSession());
                console.log('LOGIN RSP ::: ', rsp);
                // dispatch(actions.leaveBusyState());
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
