import axios from "axios";
import {
  ADMIN_GET_ALL_ORDERS_FAIL,
  ADMIN_GET_ALL_ORDERS_SUCCESS,
  ADMIN_GET_ALL_PRODUCT_FAIL,
  ADMIN_GET_ALL_PRODUCT_SUCCESS,
  ADMIN_GET_ALL_USERS_FAIL,
  ADMIN_GET_ALL_USERS_SUCCESS,
  ADMIN_GET_ORDER_BY_ID_FAIL,
  ADMIN_GET_ORDER_BY_ID_SUCCESS,
  ADMIN_GET_PRODUCT_BY_ID_FAIL,
  ADMIN_GET_PRODUCT_BY_ID_SUCCESS,
  ADMIN_GET_USER_BY_ID_FAIL,
  ADMIN_GET_USER_BY_ID_SUCCESS,
  ADMIN_PRODUCT_CREATE_FAIL,
  ADMIN_PRODUCT_CREATE_SUCCESS,
  ADMIN_PRODUCT_UPDATE_FAIL,
  ADMIN_PRODUCT_UPDATE_SUCCESS,
  ADMIN_USER_UPDATE_FAIL,
  ADMIN_USER_UPDATE_SUCCESS,
} from "./types";

// get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/users");

    dispatch({
      type: ADMIN_GET_ALL_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("getAllUserFail. --admin error");
    dispatch({
      type: ADMIN_GET_ALL_USERS_FAIL,
    });
  }
};

// get user by id
export const getUserById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/users/${userId}`);

    dispatch({
      type: ADMIN_GET_USER_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("get user by id fail. --admin error");

    dispatch({
      type: ADMIN_GET_USER_BY_ID_FAIL,
    });
  }
};

// Update user
export const editUser =
  (userId, { name, email, isAdmin }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, isAdmin });

    try {
      const res = await axios.post(`/api/admin/users/${userId}`, body, config);

      dispatch({
        type: ADMIN_USER_UPDATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
      console.log("Update user fail. --admin error");

      dispatch({
        type: ADMIN_USER_UPDATE_FAIL,
      });
    }
  };

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/product");
    dispatch({
      type: ADMIN_GET_ALL_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("get all product fail. --admin error");
    dispatch({
      type: ADMIN_GET_ALL_PRODUCT_FAIL,
    });
  }
};

// get Product by id
export const getProductById = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/product/${productId}`);

    dispatch({
      type: ADMIN_GET_PRODUCT_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    console.log("get product by id fail. --admin error");

    dispatch({
      type: ADMIN_GET_PRODUCT_BY_ID_FAIL,
    });
  }
};

// Update product
export const editProduct =
  (productId, { name, image, price, description, quantity }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, image, price, description, quantity });

    try {
      const res = await axios.post(`/api/product/${productId}`, body, config);

      dispatch({
        type: ADMIN_PRODUCT_UPDATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
      console.log("Update product fail. --admin error");

      dispatch({
        type: ADMIN_PRODUCT_UPDATE_FAIL,
      });
    }
  };

// Create product
export const createProduct =
  ({ name, price, quantity, description, image }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      price,
      quantity,
      description,
      image,
    });

    try {
      const res = await axios.post(`/api/admin/product`, body, config);
      console.log(res);

      dispatch({
        type: ADMIN_PRODUCT_CREATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
      console.log("Create product fail. --admin error");

      dispatch({
        type: ADMIN_PRODUCT_CREATE_FAIL,
      });
    }
  };

// get all order
export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/orders");

    dispatch({
      type: ADMIN_GET_ALL_ORDERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("get All Order Fail. --admin error");
    dispatch({
      type: ADMIN_GET_ALL_ORDERS_FAIL,
    });
  }
};

// get user by id
export const getOrderById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/orders/${userId}`);

    dispatch({
      type: ADMIN_GET_ORDER_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("get order by id fail. --admin error");

    dispatch({
      type: ADMIN_GET_ORDER_BY_ID_FAIL,
    });
  }
};

// // Update user
// export const editUser =
//   (userId, { name, email, isAdmin }) =>
//   async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({ name, email, isAdmin });

//     try {
//       const res = await axios.post(`/api/admin/users/${userId}`, body, config);

//       dispatch({
//         type: ADMIN_USER_UPDATE_SUCCESS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err.message);
//       console.log("Update user fail. --admin error");

//       dispatch({
//         type: ADMIN_USER_UPDATE_FAIL,
//       });
//     }
//   };
