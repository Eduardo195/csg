export const getUploadError = state => state.profile.cvs.upload.error;
export const getUploadSuccess = state => state.profile.cvs.upload.success;
export const getIsUploading = state => state.profile.cvs.upload.isLoading;

export const getMetaIsLoading = state => state.profile.cvs.meta.isLoading;
export const getMetaError = state => state.profile.cvs.upload.error;
export const getFilename = state => state.profile.cvs.meta.filename;
export const getMimetype = state => state.profile.cvs.meta.mimetype;
export const getSize = state => state.profile.cvs.meta.size;
