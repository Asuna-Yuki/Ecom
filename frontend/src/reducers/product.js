import {
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
} from "../actions/types";

const productInitialState = [];

export default function (state = productInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCT:
      return [...state, payload];

    case GET_ALL_PRODUCT_FAIL:
      return state;

    case CLEAR_PRODUCTS:
      return [];

    default:
      return state;
  }
}
