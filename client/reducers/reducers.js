import { combineReducers } from 'redux';
import workAd from 'components/advert/reducers/workAdReducer';
import dialogs from 'components/dialog/reducers/dialogReducer';
import search from 'components/search/reducers/searchReducer';
import latest from 'components/latest/reducers/latestReducer';
import user from 'components/user/reducers/user';

export default combineReducers({
    search,
    latest,
    workAd,
    dialogs,
    user,
});
