import React, { Fragment } from "react";

const CheckoutCard = ({ item: { name, image, quantity, price } }) => {
  const totalPrice = quantity * price;
  return (
    <Fragment>
      <div className='checkout-card'>
        <div className='checkout-card-img'>
          <img className='image' src={image} alt='' />
        </div>
        <div className='checkout-card-info'>
          <h2>{name}</h2>
        </div>
        <div className='checkout-card-info'>
          <h2>
            {quantity} x ₹{price} = ₹{totalPrice}
          </h2>
        </div>
      </div>
    </Fragment>
  );
};
export default CheckoutCard;
