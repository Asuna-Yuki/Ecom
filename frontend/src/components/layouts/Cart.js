import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import PropTypes from "prop-types";

const Cart = ({ isAuthenticated, cart }) => {
  // const cart = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>Shoping cart</h1>
      {cart.length !== 0 ? (
        cart.map((cartItem) => (
          <CartCard key={cartItem._id} cartItem={cartItem} />
        ))
      ) : (
        <div>cart is empty</div>
      )}

      <div className='cart'>
        <h1>SUBTOTAL</h1>
        <p>{}</p>
        {isAuthenticated ? (
          <Link to='/address'>
            <button className='btn'>CheckOut</button>
          </Link>
        ) : (
          <Link to='/login'>
            <button className='btn'>CheckOut</button>
          </Link>
        )}
      </div>

      <hr></hr>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Cart);
