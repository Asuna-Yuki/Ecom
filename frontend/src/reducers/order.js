import {
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_DETAIL_SUCCESS,
} from "../actions/types";
const initialState = {
  orderDetail: {},
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

    case ORDER_FAIL:
      return {
        ...state,
        orderLoading: false,
      };

    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        orderDetail: payload,
        orderLoading: false,
      };

    default:
      return state;
  }
}
