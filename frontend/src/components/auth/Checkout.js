import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { shippingAddress } from "../../actions/cart";

const Checkout = ({ auth: { isAuthenticated, loading }, shippingAddress }) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const { address, city, state, pincode } = formData;

  if (!loading && !isAuthenticated) {
    console.log("called");
    return <Navigate to='/' />;
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    shippingAddress(formData);
  };
  return (
    <div className='main'>
      <Link to='/cart'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='register'>
        <h1>ENTER YOUR DETAILS</h1>
        <hr></hr>
        <form onSubmit={(e) => onSubmit(e)}>
          <h4>Address</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Address'
            name='address'
            value={address}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>city</h4>
          <input
            className='register-input'
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>State</h4>
          <input
            className='register-input'
            type='text'
            placeholder='State'
            name='state'
            value={state}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>Pincode</h4>
          <input
            className='register-input'
            type='number'
            placeholder='Pincode'
            name='pincode'
            value={pincode}
            onChange={(e) => onChange(e)}
            required
          />
          <button className='btn register-btn'>Proceed to payment</button>
        </form>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  auth: PropTypes.object.isRequired,
  shippingAddress: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { shippingAddress })(Checkout);
