import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import PropTypes from "prop-types";

const Cart = ({ isAuthenticated, cart }) => {
  let totalCost = 0;
  cart.forEach((cartItem) => {
    totalCost += cartItem.price;
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
        <div className='checkout'>
          <div className='product-column-3'>
            <div className='product-detail'>
              <div className='product-detail-item'>
                <div className='row'>
                  <h1>SUBTOTAL</h1>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
                  <h2>Items: {cart.length}</h2>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
                  <h2>₹ {totalCost}</h2>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
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
