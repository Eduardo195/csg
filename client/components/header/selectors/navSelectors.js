/* eslint import/prefer-default-export: 0 */
import { getIsLoggedIn, getIsEmployer } from 'components/user/selectors/sessionSelectors';

const navOptions = {
  base: [{
    label: 'opportunities',
    href: '/opportunities/',
  }, {
    label: 'Register your company',
    href: '/registration/employer',
  // }, {
  //   label: 'employers',
  //   items: [
  //         { label: 'Resgister your company', href: 'registration/employer' },
  //   ],
  }],
  employer: [{
    label: 'create opportunity',
    href: '/opportunity/create',
  }],
  user: [{
    label: 'opportunities',
    href: '/opportunities/',
  }, {
    label: 'my applications',
    href: '/applications',
  }],
};

export const getNavItems = (state) => {
  if (!getIsLoggedIn(state)) {
    return navOptions.base;
  } else if (getIsEmployer(state)) {
    return navOptions.employer;
  }
  return navOptions.user;
};
