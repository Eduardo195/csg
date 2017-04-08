/* eslint import/prefer-default-export:0 */
import UserService from 'services/user/userService';
import { setOverlayVisibility } from 'components/overlay/actions/actions';

export function deleteAccount() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    UserService.delete().then(() => {
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setOverlayVisibility(false));
    });
  };
}
