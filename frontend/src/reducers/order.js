import {
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
  GET_ORDER_BY_USER_SUCCESS,
} from "../actions/types";
const initialState = {
  orderDetail: {},
  userOrders: [],
  lastOrder: null,
  orderLoading: true,
  success: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        lastOrder: payload.order,
        success: true,
      };

    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        orderDetail: payload,
        orderLoading: false,
      };

    case GET_ORDER_BY_USER_SUCCESS:
      return {
        ...state,
        userOrders: payload,
        orderLoading: false,
      };

    case ORDER_FAIL:
    case ORDER_DETAIL_FAIL:
      return {
        ...state,
        orderLoading: false,
      };

    default:
      return state;
  }
}
