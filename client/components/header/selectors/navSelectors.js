/* eslint import/prefer-default-export: 0 */
import { getIsLoggedIn, getIsEmployer } from 'components/user/selectors/sessionSelectors';

const navOptions = {
  base: [{
    label: 'Opportunities',
    href: '/opportunities/',
  }, {
    label: 'Employers',
    items: [
          { label: 'Resgister your company', href: 'registration/employer' },
    ],
  }],
  employer: [{
    label: 'Create opportunity',
    href: '/employer/post',
  }],
  user: [{
    label: 'Opportunities',
    href: '/opportunities/',
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
