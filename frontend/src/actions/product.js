import axios from "axios";
import { setAlert } from "./alert";
import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAIL, CLEAR_PRODUCTS } from "./types";

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_PRODUCTS });
    const res = await axios.get("/api/product");
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.message.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
    });
  }
};
