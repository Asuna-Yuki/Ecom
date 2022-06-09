import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='register'>
        <h1>Log in</h1>
        <hr></hr>
        <form action=''>
          <h4>Name</h4>
          <input
            className='register-input'
            type='text'
            placeholder='First Name'
            required
          ></input>
          <h4>Email</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Email'
            required
          ></input>
          <h4>Password</h4>
          <input
            type='password'
            className='register-input'
            placeholder='Password'
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

export default Login;
