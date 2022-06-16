import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const { email, password } = formData;
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='register'>
        <h1>Log in</h1>
        <hr></hr>
        <form onSubmit={(e) => onSubmit(e)}>
          <h4>Email</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          ></input>
          <h4>Password</h4>
          <input
            className='register-input'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='8'
          ></input>
          <button className='btn register-btn'>Log in</button>
        </form>
        <p>
          Dont have an account, <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
};
export default connect(null, { login })(Login);
