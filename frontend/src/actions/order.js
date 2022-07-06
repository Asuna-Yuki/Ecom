import axios from "axios";
import { setAlert } from "./alert";
import {
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
} from "./types";

// create order
export const createOrder = (orderDetails) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(orderDetails);
  try {
    const res = await axios.post("/api/checkout", body, config);

    dispatch({
      type: ORDER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
    dispatch({
      type: ORDER_FAIL,
    });
  }
};

// get order detail
export const getOrderById = (orderId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/${orderId}`);

    dispatch({
      type: ORDER_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
    dispatch({
      type: ORDER_DETAIL_FAIL,
    });
  }
};
