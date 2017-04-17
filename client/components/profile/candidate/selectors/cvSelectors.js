import get from 'lodash/get';

export const getUploadError = state => get(state, 'profile.cv.upload.error', null);
export const getUploadSuccess = state => get(state, 'profile.cv.upload.success', null);
export const getIsUploading = state => get(state, 'profile.cv.upload.isLoading', null);

export const getMetaIsLoading = state => get(state, 'profile.cv.meta.isLoading', null);
export const getFilename = state => get(state, 'profile.cv.meta.filename', null);
export const getMimetype = state => get(state, 'profile.cv.meta.mimetype', null);
export const getMetaError = state => get(state, 'profile.cv.meta.error', null);
export const getSize = state => get(state, 'profile.cv.meta.size', null);
