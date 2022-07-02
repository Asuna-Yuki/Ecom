import { connect } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Payment = ({ auth: { isAuthenticated, loading } }) => {
  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }

  const onSubmit = () => {};
  return (
    <div className='main'>
      <h1>PAYMENT METHOD</h1>
      <br />
      <br />
      <h2>SELECT PAYMENT METHOD</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <h3>Paypal</h3>
        <input type='radio' name='paypal' value='paypal' />
        <br />
        <h3>Google Pay</h3>
        <input type='radio' name='googlePay' value='googlePay' />
        <br />
        <h3>Cash on Delivery</h3>
        <input type='radio' name='cod' value='cod' />
        <br />
        <button className='btn register-btn'>Proceed to Checkout</button>
      </form>
    </div>
  );
};

Payment.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Payment);
