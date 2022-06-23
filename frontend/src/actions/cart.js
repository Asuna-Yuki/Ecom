import axios from "axios";
import { setAlert } from "./alert";
import { ADD_ITEM_CART } from "./types";

// set product in cart in localstorage
export const addItemInCart = (item) => (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ITEM_CART,
      payload: item,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(errors)));
    }
  }
};
