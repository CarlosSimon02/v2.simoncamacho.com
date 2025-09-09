export const getErrorCode = (errorMessage: string) => {
  try {
    const error = JSON.parse(errorMessage);
    return error.code;
  } catch (error) {
    return 500;
  }
};
