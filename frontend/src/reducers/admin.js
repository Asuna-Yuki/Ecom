import {
  ADMIN_GET_ALL_PRODUCT_FAIL,
  ADMIN_GET_ALL_PRODUCT_SUCCESS,
  ADMIN_GET_PRODUCT_BY_ID_FAIL,
  ADMIN_GET_PRODUCT_BY_ID_REQUEST,
  ADMIN_GET_PRODUCT_BY_ID_SUCCESS,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS,
} from "../actions/types";

const initialState = {
  userList: [],
  userDetails: {},
  productList: [],
  productDetails: {},
  loading: true,
};

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

    case ADMIN_GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: payload,
        loading: false,
      };

    case ADMIN_GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productDetails: payload,
        loading: false,
      };

    case GET_ALL_USERS_FAIL:
    case GET_USER_BY_ID_FAIL:
    case ADMIN_GET_ALL_PRODUCT_FAIL:
    case ADMIN_GET_PRODUCT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
