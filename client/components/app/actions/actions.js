/* eslint import/prefer-default-export: 0 */
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import UserService from 'services/user/userService';
import { setUser } from 'components/user/actions/userActions';

export function init() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    // restore session
    UserService.restoreSession().catch(e => e).then((res) => {
      if (res.user) {
        dispatch(setUser(res.user));
      }
      dispatch(setOverlayVisibility(false));
    });
  };
}
