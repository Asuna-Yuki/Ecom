import { connect } from "react-redux";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Checkout = ({
  auth: { isAuthenticated, loading },
  cart: { cartItems, shippingAddress, paymentMethod, cartLoading },
}) => {
  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!cartLoading) {
    return (
      <div className='main'>
        <Link to='/payment'>
          <button className='back-btn btn'>Go Back</button>
        </Link>
        <div className='row'>
          <div className='product-column-2'>
            <h1>SHIPPING</h1>
            <p>
              {shippingAddress.address},{shippingAddress.city},
              {shippingAddress.state},{shippingAddress.pincode}
            </p>
            <hr />
            <h1>PAYMENT METHOD</h1>
            <p>{paymentMethod ? paymentMethod : `No method selected`}</p>
            <hr />
            <h1>ORDEER ITEMS</h1>
            <p>{cartItems[0].name}</p>
          </div>
          <div className='product-column-3'>
            <div className='product-detail'>
              <div className='product-detail-item'>
                <div className='row'>
                  <h1>ORDER SUMMARY</h1>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
                  <p>Items:</p>
                  <p>{cartItems.length}</p>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
                  <p>Shipping:</p>
                  <p>100</p>
                </div>
              </div>
              <div className='product-detail-item'>
                <div className='row'>
                  <p>Total:</p>
                  <p>100</p>
                </div>
              </div>
              <div className='product-detail-item'>
                <a href='#!'>
                  <button className='add-to-cart btn'>Place Order</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Checkout.propTypes = {
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Checkout);
