/* eslint import/prefer-default-export: 0 */
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import SessionService from 'services/session/sessionService';
import { setUser } from 'components/user/actions/userActions';

export function init() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    // restore session
    SessionService.restoreSession().then((res) => {
      if (res.user) {
        dispatch(setUser(res.user));
      }
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setOverlayVisibility(false));
    });
  };
}
