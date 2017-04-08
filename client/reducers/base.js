import session from 'components/session/reducers/reducer';
import overlay from 'components/overlay/reducers/reducer';
import dialogs from 'components/dialog/reducers/dialogReducer';
import latest from 'components/latest/reducers/latestReducer';
import search from 'components/search/reducers/searchReducer';

export default {
  session,
  overlay,
  dialogs,
  latest, // TODO: Remove when we have different root pages for employers
  search, // TODO: remove for employer reducer
};
