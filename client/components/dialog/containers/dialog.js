import { connect } from 'react-redux';
import { getDialogConfig, getDialogComponentId } from '../selectors/dialogSelectors';
import * as actions from '../actions/dialogActions';
import Dialog from '../dialog';

function mapStateToProps(state) {
    return {
        config: getDialogConfig(state),
        componentId: getDialogComponentId(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hideDialog() {
            dispatch(actions.hideDialog());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
