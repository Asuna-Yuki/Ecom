import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrderById, markAsDelivered } from "../../actions/admin";
import Loader from "../layouts/Loader";

const OrderInfo = ({ getOrderById, admin, markAsDelivered }) => {
  // GEt order by id
  useEffect(() => {
    getOrderById(orderId);
  }, []);

  let params = useParams();

  // get order id from params i.e. url
  const orderId = params.id;
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
          <div>
            <button
              className='btn primary-btn'
              onClick={() => {
                markAsDelivered(admin.orderDetails._id);
              }}
            >
              EDIT
            </button>
            <button className='btn primary-btn'>DELETE</button>
          </div>
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
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getOrderById, markAsDelivered })(
  OrderInfo
);
