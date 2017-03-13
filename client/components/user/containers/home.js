import { connect } from 'react-redux';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Home from '../home';

function mapStateToProps(state) {
    return {
        username: getUsername(state),
    };
}

export default connect(mapStateToProps)(Home);
