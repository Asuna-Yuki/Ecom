import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getOrderById } from "../../actions/order";
import Loader from "../layouts/Loader";
import CheckoutCard from "../auth/CheckoutCard";

const Order = ({
  auth: { loading, isAuthenticated, user },
  getOrderById,
  order: { orderDetail, orderLoading },
}) => {
  // GEt product by id
  useEffect(() => {
    getOrderById(orderId);
  }, []);

  let params = useParams();

  const orderId = params.id;

  let totalCost = 0;
  let shipping = 100;

  !orderLoading &&
    orderDetail.orderItems.forEach((item) => {
      totalCost += item.quantity * item.price;
    });

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!loading) {
    return (
      <div className='main'>
        <Link to='/'>
          <button className='back-btn btn'>Go Back</button>
        </Link>
        <h1 id='orderId'>Order Id: {orderId}</h1>

        <div className='order'>
          <div className='order-detail'>
            <div className='order-head'>SHIPPING</div>
            <div className='order-content'>Name: {user.name}</div>
            <div className='order-content'>Email: {user.email}</div>
            {!orderLoading ? (
              <div className='order-content'>
                Address: {orderDetail.shippingAddress.address},{" "}
                {orderDetail.shippingAddress.city},{" "}
                {orderDetail.shippingAddress.state},{" "}
                {orderDetail.shippingAddress.pincode}
              </div>
            ) : (
              <Loader />
            )}
            <div className='order-box order-box-danger'>Not Delivered</div>
            <div className='order-head'>PAYMENT</div>
            <div className='order-content'>
              Method: {orderDetail.paymentMethod}
            </div>
            <div className='order-box order-box-danger'>Not Payed</div>
            <div className='order-head'>ORDER ITEMS</div>
            {!orderLoading ? (
              <div className='order-content'>
                {orderDetail.orderItems.map((item) => (
                  <CheckoutCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </div>
          <div className='order-subtotal'>
            <div className='order-subtotal-item'>ORDER SUMMARY</div>
            <div className='order-subtotal-item'>
              Items: {!orderLoading ? orderDetail.orderItems.length : 0}
            </div>
            <div className='order-subtotal-item'>Shipping: ₹{shipping}</div>
            <div className='order-subtotal-item'>
              Total Cost: ₹{totalCost + shipping}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Order.propTypes = {
  auth: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  getOrderById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { getOrderById })(Order);
