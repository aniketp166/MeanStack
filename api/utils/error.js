export const CreateError = (status, error) => {
  const err = new Error();
  (err.status = status), (err.message = error);
  return err;
};
// export const CreateError = (status, message, errorCode = null, details = null) => {
//   const err = new Error();
//   err.status = status;
//   err.message = message;
//   err.errorCode = errorCode;
//   err.details = details;
//   return err;
// };
