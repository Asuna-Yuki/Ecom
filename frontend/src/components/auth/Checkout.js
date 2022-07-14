import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { createOrder } from "../../actions/order";
import CheckoutCard from "./CheckoutCard";

const Checkout = ({
  auth: { isAuthenticated, loading, user },
  cart: { cartItems, shippingAddress, paymentMethod, cartLoading },
  createOrder,
  order: { lastOrder, orderLoading, success },
}) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate(`/order/${lastOrder}`);
    }
  }, [success]);

  let shippingCost = 100;
  let totalCost = 0;
  !cartLoading &&
    cartItems.forEach((item) => {
      return (totalCost += item.quantity * item.price);
    });

  const onClick = () => {
    createOrder({ cartItems, shippingAddress, paymentMethod, user });
  };

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }

  if (!cartLoading) {
    return (
      <div className='main'>
        <Link to='/payment'>
          <button className='back-btn btn'>Go Back</button>
        </Link>
        <div className='checkout'>
          <div className='checkout-details'>
            <h1>SHIPPING</h1>
            <p>
              ADDRESS: {shippingAddress.address}, {shippingAddress.city},{" "}
              {shippingAddress.state}, {shippingAddress.pincode}
            </p>
            <hr />
            <h1>PAYMENT METHOD</h1>
            <p>
              METHOD: {paymentMethod ? paymentMethod : `No method selected`}
            </p>
            <hr />
            <h1>ORDER ITEMS</h1>
            {cartItems.length !== 0 ? (
              cartItems.map((item) => (
                <CheckoutCard key={item._id} item={item} />
              ))
            ) : (
              <div>cart is empty</div>
            )}
          </div>
          <div className='checkout-subtotal'>
            <div className='checkout-subtotal-item'>ORDER SUMMARY</div>
            <div className='checkout-subtotal-item'>
              Items: {cartItems.length}
            </div>
            <div className='checkout-subtotal-item'>
              Shipping: ₹{shippingCost}
            </div>
            <div className='checkout-subtotal-item'>
              Total Cost: ₹{shippingCost + totalCost}
            </div>
            <div className='checkout-subtotal-item'>
              <button onClick={() => onClick()} className='add-to-cart btn'>
                Place Order
              </button>
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
  createOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  order: state.order,
});

export default connect(mapStateToProps, { createOrder })(Checkout);
