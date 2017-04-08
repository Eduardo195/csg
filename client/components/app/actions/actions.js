/* eslint import/prefer-default-export: 0 */
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import SessionService from 'services/session/sessionService';
import { setSession } from 'components/session/actions/actions';

export function init() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    // restore session
    SessionService.restoreSession().then((res) => {
      if (res.user) {
        dispatch(setSession(res.user));
      }
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setOverlayVisibility(false));
    });
  };
}
