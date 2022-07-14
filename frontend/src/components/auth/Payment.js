import { connect } from "react-redux";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { paymentMethod } from "../../actions/cart";

const Payment = ({ auth: { isAuthenticated, loading }, paymentMethod }) => {
  const [method, setMethod] = useState("paypal");
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    paymentMethod(method);
    navigate("/checkout");
  };

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <Link to='/address'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>PAYMENT METHOD</h1>
      <hr />
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <br />
        <label htmlFor='paylal'>Paypal</label>
        <input
          type='radio'
          name='paymentMethod'
          value='paypal'
          onChange={(e) => setMethod(e.target.value)}
        />
        <br />
        <label htmlFor='googlePay'>Google Pay</label>
        <input
          type='radio'
          name='paymentMethod'
          value='googlePay'
          onChange={(e) => setMethod(e.target.value)}
        />
        <br />
        <label htmlFor='cod'>Cash On Delivery</label>
        <input
          type='radio'
          name='paymentMethod'
          value='cod'
          onChange={(e) => setMethod(e.target.value)}
        />
        <br />
        <button className='btn register-btn'>Continue</button>
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
