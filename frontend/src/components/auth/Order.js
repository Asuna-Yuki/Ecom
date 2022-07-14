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

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!loading) {
    return (
      <div className='main'>
        <Link to='/'>
          <button className='back-btn btn'>Go Back</button>
        </Link>
        <h1>Order Id: {orderId}</h1>

        <div className='order'>
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
          <div className='order-box'>Not Delivered</div>
          <div className='order-head'>PAYMENT</div>
          <div className='order-content'>Method: {user.name}</div>
          <div className='order-box'>Not Payed</div>
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
