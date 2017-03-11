import { connect } from 'react-redux';
import WorkAd from '../workAd';
import { getWorkAd } from '../selectors/workAdSelectors';
import * as actions from '../actions/workAdActions';

function mapStateToProps(state) {
    return { workAd: getWorkAd(state) };
}

function mapDispatchToProps(dispatch) {
    return {
        setTitle(e) {
            dispatch(actions.setWorkTitle(e.target.value));
        },
        setRole(e) {
            dispatch(actions.setWorkRole(e.target.value));
        },
        setLocation(e) {
            dispatch(actions.setWorkLocation(e.target.value));
        },
        setEmployer(e) {
            dispatch(actions.setWorkEmployer(e.target.value));
        },
        setContractType(e) {
            dispatch(actions.setWorkContractType(e.target.value));
        },
        setMinPay(e) {
            dispatch(actions.setWorkMinPay(e.target.value));
        },
        setMaxPay(e) {
            dispatch(actions.setWorkMaxPay(e.target.value));
        },
        setPayRange(e) {
            dispatch(actions.setWorkPayRange(e.target.value));
        },
        setPayCriteria(e) {
            dispatch(actions.setWorkPayCriteria(e.target.value));
        },
        setWriteUp(e) {
            dispatch(actions.setWorkWriteUp(e.target.value));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkAd);
