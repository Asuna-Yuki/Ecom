import { ADD_ITEM_CART } from "../actions/types";

const initialState = {
  cartItems: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_CART:
      const sameItem = state.cartItems.find((x) => x._id === payload._id);

      // to do DO NOT TOUCH IT
      if (sameItem) {
        console.log("sameItem");
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === sameItem._id ? payload : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      }

    default:
      return state;
  }
}