import React, { useState } from "react";
import { removeItemInCart } from "../../actions/cart";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CartCard = ({ cartItem, removeItemInCart }) => {
  const [data, setData] = useState({ input: cartItem.quantity });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className='cart-card'>
      <div className='cart-card-img'>
        <img className='image' src={cartItem.image} alt=''></img>
      </div>
      <div className='cart-card-des'>
        <h1>{cartItem.name}</h1>
        <p>₹{cartItem.price}</p>
        <div className='cart-card-des-menu'>
          <input
            type='number'
            className='quantity-input cart-input'
            name='input'
            min={1}
            max={5}
            value={data.input}
            onChange={(e) => onChange(e)}
          ></input>
          <a href='#!' onClick={() => removeItemInCart(cartItem._id)}>
            Remove
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

CartCard.propTypes = {
  removeItemInCart: PropTypes.func.isRequired,
};

export default connect(null, { removeItemInCart })(CartCard);
