import React from "react";

const CartCard = () => {
  return (
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
  );
};

export default CartCard;
