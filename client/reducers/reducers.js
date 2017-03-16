import { combineReducers } from 'redux';
import workAd from 'components/advert/reducers/workAdReducer';
import dialogs from 'components/dialog/reducers/dialogReducer';
import search from 'components/search/reducers/searchReducer';
import latest from 'components/latest/reducers/latestReducer';
import user from 'components/user/reducers/user';
import registration from 'components/registration/reducers/reducer';
import login from 'components/login/reducers/reducer';

export default combineReducers({
  registration,
  search,
  latest,
  workAd,
  dialogs,
  user,
  login,
});
