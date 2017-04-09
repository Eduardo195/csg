export const getUploadError = state => state.profile.cv.upload.error;
export const getUploadSuccess = state => state.profile.cv.upload.success;
export const getIsUploading = state => state.profile.cv.upload.isLoading;

export const getMetaIsLoading = state => state.profile.cv.meta.isLoading;
export const getMetaError = state => state.profile.cv.upload.error;
export const getFilename = state => state.profile.cv.meta.filename;
export const getMimetype = state => state.profile.cv.meta.mimetype;
export const getSize = state => state.profile.cv.meta.size;
