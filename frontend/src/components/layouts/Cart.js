import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>shoping cart</h1>
      <div className='cart'>
        <div className='cart-card-img'>
          <img className='image' src='images/Itsuki.jpg' alt=''></img>
        </div>
        <div className='cart-card-des'>
          <h1>Product name</h1>
          <p>Status</p>
          <div className='cart-card-des-menu'>
            <input type='number' className='quantity-input cart-input'></input>
            <a href='#'>Remove</a>
          </div>
        </div>
      </div>
      <div className='cart'>
        <div className='cart-card-img'>
          <img className='image' src='images/Nino.png' alt=''></img>
        </div>
        <div className='cart-card-des'>
          <h1>Product name</h1>
          <p>Status</p>
          <div className='cart-card-des-menu'>
            <input type='number' className='quantity-input cart-input'></input>
            <a href='#'>Remove</a>
          </div>
        </div>
      </div>
      <div className='cart'>
        <div className='cart-card-img'>
          <img className='image' src='images/Miku.jpg' alt=''></img>
        </div>
        <div className='cart-card-des'>
          <h1>Product name</h1>
          <p>Status</p>
          <div className='cart-card-des-menu'>
            <input type='number' className='quantity-input cart-input'></input>
            <a href='#'>Remove</a>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Cart;
