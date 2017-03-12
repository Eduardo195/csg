import { combineReducers } from 'redux';
import workAd from 'components/advert/reducers/workAdReducer';
import dialogs from 'components/dialog/reducers/dialogReducer';
import session from 'components/user/reducers/session';
import search from 'components/search/reducers/searchReducer';
import latest from 'components/latest/reducers/latestReducer';

export default combineReducers({
    search,
    latest,
    workAd,
    dialogs,
    session,
});
