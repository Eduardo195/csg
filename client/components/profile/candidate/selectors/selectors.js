export const getProfile = state => state.profile;
export const getProfileIsLoading = state => state.profile.query.isLoading;
export const getProfileError = state => state.profile.query.error;

export const getPersonalIsLoading = state => state.profile.personal.query.isLoading;
export const getPersonalSuccess = state => state.profile.personal.query.success;
export const getPersonalError = state => state.profile.personal.query.error;

export const getName = state => state.profile.personal.name;
export const getSurname = state => state.profile.personal.surname;

export const getProfessionalIsLoading = state => state.profile.professional.query.isLoading;
export const getProfessionalSuccess = state => state.profile.professional.query.success;
export const getProfessionalError = state => state.profile.professional.query.error;
export const getYearsExperience = state => state.profile.professional.yearsXp;
export const getKeywords = state => state.profile.professional.keywords;

export const getVisibilityIsLoading = state => state.profile.employerVisibility.query.isLoading;
export const getVisibilitySuccess = state => state.profile.employerVisibility.query.success;
export const getVisibilityError = state => state.profile.employerVisibility.query.error;
export const getEmployerVisibility = state => state.profile.employerVisibility.employerVisibility;
