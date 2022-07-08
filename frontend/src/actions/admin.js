import axios from "axios";
import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS,
} from "./types";

// get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/users");

    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("getAllUserFail. --admin error");
    dispatch({
      type: GET_ALL_USERS_FAIL,
    });
  }
};

// get user by id
export const getUserById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/users/${userId}`);

    dispatch({
      type: GET_USER_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("getUserByIdFail. --admin error");

    dispatch({
      type: GET_USER_BY_ID_FAIL,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/products");

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log("getAllProductFail. --admin error");
    dispatch({
      type: GET_ALL_PRODUCT_FAIL,
    });
  }
};

// get Product by id
export const getProductById = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/products/${productId}`);

    dispatch({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("getProductByIdFail. --admin error");

    dispatch({
      type: GET_PRODUCT_BY_ID_FAIL,
    });
  }
};
