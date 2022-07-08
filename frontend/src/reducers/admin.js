import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS,
} from "../actions/types";

const initialState = { userList: [], userDetails: {}, loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        userList: payload,
        loading: false,
      };

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        loading: false,
      };

    case GET_ALL_USERS_FAIL:
    case GET_USER_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
