import {
  ADMIN_GET_ALL_ORDERS_FAIL,
  ADMIN_GET_ALL_ORDERS_SUCCESS,
  ADMIN_GET_ALL_PRODUCT_FAIL,
  ADMIN_GET_ALL_PRODUCT_SUCCESS,
  ADMIN_GET_ALL_USERS_FAIL,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_GET_ORDER_BY_ID_FAIL,
  ADMIN_GET_ORDER_BY_ID_SUCCESS,
  ADMIN_GET_PRODUCT_BY_ID_FAIL,
  ADMIN_GET_PRODUCT_BY_ID_SUCCESS,
  ADMIN_GET_USER_BY_ID_FAIL,
  ADMIN_GET_USER_BY_ID_SUCCESS,
} from "../actions/types";

const initialState = {
  userList: [],
  userDetails: {},
  productList: [],
  productDetails: {},
  orderList: [],
  orderDetails: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        userList: payload,
        loading: false,
      };

    case ADMIN_GET_USER_BY_ID_SUCCESS:
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

    case ADMIN_GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orderList: payload,
        loading: false,
      };

    case ADMIN_GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        orderDetails: payload,
        loading: false,
      };

    case ADMIN_GET_ALL_USERS_FAIL:
    case ADMIN_GET_USER_BY_ID_FAIL:
    case ADMIN_GET_ALL_PRODUCT_FAIL:
    case ADMIN_GET_PRODUCT_BY_ID_FAIL:
    case ADMIN_GET_ALL_ORDERS_FAIL:
    case ADMIN_GET_ORDER_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
