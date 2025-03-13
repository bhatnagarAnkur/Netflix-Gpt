export const validateUser = (email, pwd) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPwdValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );

  if (!isEmailValid) {
    return "Invalid Email Id";
  }

  if (!isPwdValid) {
    return "Invalid Password";
  }

  return null;
};

