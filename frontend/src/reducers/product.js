import {
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
} from "../actions/types";

const productInitialState = { products: [] };

export default function (state = productInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCT:
      return { ...state, products: payload };

    case GET_ALL_PRODUCT_FAIL:
      return state;

    case CLEAR_PRODUCTS:
      return { products: [] };

    default:
      return state;
  }
}
