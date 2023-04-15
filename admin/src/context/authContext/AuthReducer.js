// AND HERE, WE WRITE OUR MAIN FUNCTION, REDUCER FUNCTION
// THIS REDUCER FUNCTION WAS TRIGGRED BY THE "DISPATCH" METHOD
// WHICH IS USED ON THE MAIN COMPONENT PAGE

// this "action" is send by the "dispatch" method from the component page
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: null,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
