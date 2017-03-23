export const getUser = state => state.user;
export const getUsername = state => state.user && state.user.username;

export const getIsLoggedIn = state => !!state.user;
export const getIsEmployer = state => state.user && state.user.type === 'employer';
