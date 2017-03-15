export const getSubmissionErrors = state => state.registration.submissionErrors;
export const getsValidationErrors = state => state.registration.validationErrors;
export const getRegistrationSuccess = state => state.registration.registrationSuccess;
export const getCaptchaError = state => state.registration.captcha;
export const getIsHashValid = state => state.registration.hash && state.registration.hash.isValid;
export const getIsHashLoading = state => state.registration.hash &&
  state.registration.hash.isLoading;
