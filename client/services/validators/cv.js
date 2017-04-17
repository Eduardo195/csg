const MIN_FILE_SIZE = 0;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;  // 1MB in bytes
const MAX_FILE_SIZE_KB = MAX_FILE_SIZE_BYTES / 1024;
const MAX_FILE_SIZE_MB = MAX_FILE_SIZE_KB / 1024;

function validate(file) {
  if (!file || !file.name || file.size === undefined || !file.type) {
    return 'No file selected';
  }

  if (file.size <= MIN_FILE_SIZE) {
    return 'File is empty';
  }

  // file input size comes in bytes
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return `file too big - max is ${MAX_FILE_SIZE_MB}MB (${MAX_FILE_SIZE_KB}KB)`;
  }

  console.warn('TODO: validate filetype');

  return null;
}

export default validate;
