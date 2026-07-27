const MAX_FILE_SIZE = 50 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
  "image/jpg",
];

export function validateFile(file) {

  if (!file) {
    return {
      valid: false,
      message: "Please select a file."
    };
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      message: "Unsupported file type."
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      message: "File size must be less than 50 MB."
    };
  }

  return {
    valid: true,
    message: ""
  };
}