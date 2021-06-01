import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  ACTIVE_LOGIN_MODAL,
} from "../../actions/user/constants";

export const userListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginModalReducer = (
  initialState = { loginModalActive: "", component: "" },
  action
) => {
  switch (action.type) {
    case ACTIVE_LOGIN_MODAL:
      return {
        loginModalActive: action.payload.active ? "active" : "",
        component: action.payload.component,
      };
    default:
      return initialState;
  }
};
