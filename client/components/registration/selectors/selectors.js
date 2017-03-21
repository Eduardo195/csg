export const getRegistrationErrors = state => state.submissions.registration.registrationErrors;
export const getRegistrationSuccess = state => state.submissions.registration.registrationSuccess;
export const getCaptcha = state => state.submissions.registration.captcha;
export const getIsHashValid = state => state.submissions.registration.hash &&
  state.submissions.registration.hash.isValid;
export const getIsHashLoading = state => state.submissions.registration.hash &&
  state.submissions.registration.hash.isLoading;
export const getRegistrationEmail = state => state.submissions.registration.email;
