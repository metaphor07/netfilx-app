import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListAction";
import { PROXY } from "../../Helper";

// Get Lists
export const getLists = async (dispatch) => {
  dispatch(getListsStart);
  try {
    const res = await axios.get(`${PROXY}/lists`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure);
  }
};

// Create list
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(`${PROXY}/lists/`, list, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

// Delete list
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    const res = await axios.delete(`${PROXY}/lists/${id}`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};

// Update list
export const updateList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    const res = await axios.delete(`${PROXY}/lists/${id}`, {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
