import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { setShippingAddress } from "../../actions/cart";

const Address = ({
  auth: { isAuthenticated, loading },
  setShippingAddress,
  cart: { shippingAddress, cartLoading },
}) => {
  const sAddress = JSON.parse(localStorage.getItem("shippingAddress"));
  const [formData, setFormData] = useState({
    address: sAddress.address,
    city: sAddress.city,
    state: sAddress.state,
    pincode: sAddress.pincode,
  });

  const { address, city, state, pincode } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setShippingAddress(formData);
    navigate("/payment");
  };

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <Link to='/cart'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='form'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>SHIPPING</h1>
          <hr />
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            placeholder='Address'
            name='address'
            value={address}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor='state'>State</label>
          <input
            type='text'
            placeholder='State'
            name='state'
            value={state}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor='pincode'>Pincode</label>
          <input
            type='number'
            placeholder='Pincode'
            name='pincode'
            value={pincode}
            onChange={(e) => onChange(e)}
            required
          />
          <button className='btn continue-btn'>Continue</button>
        </form>
      </div>
    </div>
  );
};

Address.propTypes = {
  auth: PropTypes.object.isRequired,
  setShippingAddress: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, { setShippingAddress })(Address);
