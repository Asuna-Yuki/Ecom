import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrderById, markAsDelivered } from "../../actions/admin";
import Loader from "../layouts/Loader";

const OrderInfo = ({ auth, admin, getOrderById, markAsDelivered }) => {
  // GEt order by id
  useEffect(() => {
    getOrderById(orderId);
  }, []);

  let params = useParams();

  // get order id from params i.e. url
  const orderId = params.id;

  let navigate = useNavigate();

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }
  return (
    <div className='main'>
      <Link to='/admin/orderlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>ORDER DETAILS</h1>
      {!admin.loading ? (
        <div className='admin-user-info'>
          <div>
            <strong>Order Id: </strong>
            {admin.orderDetails._id}
          </div>
          <div>
            <strong>Name:</strong>{" "}
            {admin.orderDetails.user && admin.orderDetails.user.name}
          </div>
          <div>
            <strong>Email:</strong>{" "}
            {admin.orderDetails.user && admin.orderDetails.user.email}
          </div>
          <div>
            <strong>Bill:</strong> {admin.orderDetails.totalCost}
          </div>
          <div>
            <strong>Payement Method:</strong> {admin.orderDetails.paymentMethod}
          </div>
          <div>
            <strong>Payement:</strong>{" "}
            {admin.orderDetails.isPaid ? `Payed` : `Not Payed`}
          </div>
          <div>
            <strong>Delivery:</strong>{" "}
            {admin.orderDetails.isDelivered ? `Delivered` : `Not Delivered`}
          </div>
          <button
            className='btn edit-btn'
            onClick={() => {
              markAsDelivered(admin.orderDetails._id);
              navigate("/admin/orderlist");
            }}
          >
            Mark as Delivered
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
OrderInfo.propTypes = {
  getOrderById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  markAsDelivered: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getOrderById, markAsDelivered })(
  OrderInfo
);
