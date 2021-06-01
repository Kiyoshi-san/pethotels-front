import Axios from "axios";
import { headers, errorMessage } from "../../../utils/config";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  ACTIVE_LOGIN_MODAL,
} from "../user/constants";

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/users", {
      headers,
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const activeLoginModal = (active, component) => (dispatch, getState) => {
  dispatch({ type: ACTIVE_LOGIN_MODAL, payload: { active, component } });
};
