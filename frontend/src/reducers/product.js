import {
  CLEAR_PRODUCTS,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
  GET_PRODUCT_BY_ID_SUCCESS,
} from "../actions/types";

const productInitialState = { products: [], singleProduct: {} };

export default function (state = productInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCT:
      return { ...state, products: payload };

    case GET_ALL_PRODUCT_FAIL:
      return state;

    case CLEAR_PRODUCTS:
      return { products: [], singleProduct: {} };

    case GET_PRODUCT_BY_ID_SUCCESS:
      return { ...state, singleProduct: payload };

    default:
      return state;
  }
}
