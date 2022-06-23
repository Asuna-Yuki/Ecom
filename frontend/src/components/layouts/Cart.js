import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartCard from "./CartCard";

const Cart = ({ isAuthenticated }) => {
  let cart = JSON.parse(localStorage.getItem("cartItems"));
  console.log("--", cart);
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>Shoping cart</h1>
      {cart.map((cartProduct) => (
        <CartCard key={cartProduct._id} cartProduct={cartProduct} />
      ))}

      <hr></hr>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Cart);
