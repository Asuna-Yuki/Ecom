import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import PropTypes from "prop-types";

const Cart = ({ isAuthenticated, cart }) => {
  let totalCost = 0;
  cart.forEach((cartItem) => {
    totalCost += cartItem.price * cartItem.quantity;
  });

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>Shoping cart</h1>
      <div className='cart'>
        <div className='cart-card-list'>
          {cart.length !== 0 ? (
            cart.map((cartItem) => (
              <CartCard key={cartItem._id} cartItem={cartItem} />
            ))
          ) : (
            <div>cart is empty</div>
          )}
        </div>
        <div className='cart-checkout'>
          <div className='cart-subtotal'>
            <div className='cart-subtotal-item'>ORDER SUMMARY</div>
            <div className='cart-subtotal-item'>Item: {cart.length}</div>
            <div className='cart-subtotal-item'>Total Cost: ₹{totalCost}</div>
            <div className='cart-subtotal-item'>
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
          </div>
        </div>
      </div>
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
