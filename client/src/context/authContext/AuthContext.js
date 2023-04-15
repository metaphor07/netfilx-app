import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react";
import { useEffect } from "react";
let INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, //it will store the data of the loged in user //if localstorage has available the user data
  isFetching: false, //when api is call isFetching is true and other is false
  error: false, //after fetching data, if any error occurs then the error will be true
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // After login we get the user data but we need to store in local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
