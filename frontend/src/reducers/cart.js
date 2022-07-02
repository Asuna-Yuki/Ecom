import {
  ADD_ADDRESS,
  ADD_ITEM_CART,
  LOAD_CART,
  REMOVE_ITEM_CART,
  SET_PAYMENT_METHOD,
} from "../actions/types";

const initialState = {
  cartItems: [],
  shippingAddress: null,
  paymentMethod: "",
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

    case REMOVE_ITEM_CART:
      const items = state.cartItems.filter((y) => {
        return y._id !== payload;
      });
      return {
        ...state,
        cartItems: items.map((item) => {
          return item;
        }),
      };

    case LOAD_CART:
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem("cartItems")).map((x) => {
          return x;
        }),
        shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")),
        paymentMethod: JSON.parse(localStorage.getItem("paymentMethod")),
      };

    case ADD_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };

    case SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };

    default:
      return state;
  }
}
