import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match.", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='register'>
        <h1>Register</h1>
        <hr></hr>
        <form onSubmit={(e) => onSubmit(e)}>
          <h4>Name</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>Email</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>Password</h4>
          <input
            type='password'
            className='register-input'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='8'
          />
          <h4>Confirm Password</h4>
          <input
            type='password'
            className='register-input'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='8'
          ></input>
          <button className='btn register-btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
