export const getUsername = state => state.session && state.session.username;
export const getIsLoggedIn = state => !!state.session;
export const getIsEmployer = state => state.session && state.session.type === 'employer';
export const getIsCandidate = state => state.session && state.session.type === 'candidate';
