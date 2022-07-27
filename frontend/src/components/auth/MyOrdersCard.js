import React from "react";
import { Link } from "react-router-dom";

const MyOrdersCard = ({ order }) => {
  return (
    <Link to={`/order/${order._id}`}>
      <div className='order-card'>
        <div className='order-card-image'>
          <img className='image' src={order.orderItems[0].image} alt='' />
        </div>
        <div className='order-card-detail'>
          <p>
            <strong>Id: </strong>
            <span>{order._id}</span>
          </p>
          <p>
            <strong>Payment: </strong>
            <span>{order.paymentMethod}</span>
          </p>
          <p>
            <strong>Paid: </strong>
            <span>{order.isPaid}</span>
          </p>
          <p>
            <strong>Delivered: </strong>
            <span>{order.isDelivered}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MyOrdersCard;
