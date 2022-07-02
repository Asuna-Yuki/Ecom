import { connect } from "react-redux";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { paymentMethod } from "../../actions/cart";

const Payment = ({ auth: { isAuthenticated, loading }, paymentMethod }) => {
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    paymentMethod({ data: "paypal" });
    navigate("/checkout");
  };

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }

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
  paymentMethod: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { paymentMethod })(Payment);
