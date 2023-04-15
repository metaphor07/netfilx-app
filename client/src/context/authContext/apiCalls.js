import axios from "axios";
import { loginfailure, loginStart, loginSuccess, update } from "./AuthAction";
import { API_URL } from "../../Helper";

export const login = async (user, dispatch) => {
  // here, start the login process, so,
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_URL}/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginfailure());
  }
};

export const userUpdate = async (user, inputs, dispatch) => {
  // here, start the login process, so,
  try {
    const res = await axios.put(`${API_URL}/users/${user._id}`, inputs, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    const updatedUser = { ...res.data, ["accessToken"]: user.accessToken };
    dispatch(update(updatedUser));
  } catch (error) {
    console.log(error);
  }
};
