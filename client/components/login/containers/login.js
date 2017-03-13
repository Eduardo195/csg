import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from 'components/user/actions/userActions';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Login from '../login';

function mapStateToProps(state) {
    return {
        username: getUsername(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        login(username, password) {
            $.ajax({
                url: '/api/login',
                method: 'POST',
                data: { username, password },
            }).done((user) => {
                dispatch(actions.setUser(user));
                ownProps.router.push('user/home');
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
