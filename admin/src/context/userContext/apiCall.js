import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./UserActions";
import { PROXY } from "../../Helper";

// get all users
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get(`${PROXY}/users/`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};

// delete single user
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`${PROXY}/users/${id}`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};

// Create user
export const createUser = async (user, dispatch, setCheck) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(`${PROXY}/auth/register`, user);
    dispatch(createUserSuccess(res.data));
    setCheck("success");
  } catch (error) {
    dispatch(createUserFailure());
    setCheck("error");
  }
};
