export const getProfile = state => state.profile;
export const getProfileIsLoading = state => state.profile.query.isLoading;
export const getProfileError = state => state.profile.query.error;

export const getPersonalIsLoading = state => state.profile.personal.query.isLoading;
export const getPersonalSuccess = state => state.profile.personal.query.success;
export const getPersonalError = state => state.profile.personal.query.error;

export const getName = state => state.profile.personal.name;
export const getSurname = state => state.profile.personal.surname;
