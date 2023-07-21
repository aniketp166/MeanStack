export const CreateError = (status, error) => {
  const err = new Error();
  (err.status = status), (err.message = error);
  return err;
};
