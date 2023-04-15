// IN THIS PAGE WE DEFINE THE TYPES OF POSSIBLE STAGES
// AND THEESE EXPORT SATGES ARE USE ON THE MAIN COMPONENT
// INSIDE DISPATCH FUNCTIONS, AND THERE WE ARE NO NEED TO DEFINE THE TYPE
// ONLY WRITE THE "loginStart, loginSuccess, loginFailure"
export const loginStart = () => ({
  type: "LOGIN_START",
});

//if the login process success it will return a user, we are write out api like that way
// and we are passing the user through the "payload"
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

// we can also pass the error when failure occures
export const loginfailure = () => ({
  type: "LOGIN_FAILURE",
});

// logout
export const logout = () => ({
  type: "LOGOUT",
});
