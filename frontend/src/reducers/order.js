import { ORDER_SUCCESS, ORDER_FAIL } from "../actions/types";
const initialState = {
  orderLoading: true,
  lastOrder: null,
  success: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        orderLoading: false,
        lastOrder: payload.order,
        success: true,
      };

    default:
      return state;
  }
}
