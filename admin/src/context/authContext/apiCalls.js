import axios from "axios";
import { loginfailure, loginStart, loginSuccess } from "./AuthAction";
import { PROXY } from "../../Helper";

export const login = async (user, dispatch) => {
  // here, start the login process, so,
  dispatch(loginStart());
  try {
    const res = await axios.post(`${PROXY}/auth/login`, user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginfailure());
  }
};
