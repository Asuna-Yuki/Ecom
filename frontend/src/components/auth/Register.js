import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Register = () => {
  return (
    <div className='main'>
      <div className='register'>
        <h1>Sign in</h1>
        <hr></hr>
        <form action=''>
          <h4>Name</h4>
          <input
            className='register-input'
            type='text'
            placeholder='First Name'
            required
          ></input>
          <h4>Phone Number</h4>
          <input
            className='register-input'
            type='number'
            placeholder='Phone Number'
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
          <button className='btn register-btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
