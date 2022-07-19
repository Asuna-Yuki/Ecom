import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getUserById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const OrderCard = ({ order, admin }) => {
  return !admin.loading ? (
    <div className='admin-column admin-order'>
      <span className='info'>{order._id}</span>
      <span className='info'>{order.user.name}</span>
      <span className='info'>
        {order.isDelivered ? `Delivered` : `Not Delivered`}
      </span>
      <span className='info'>{order.totalCost}</span>
      <span className='info'>
        {order.createdAt && order.createdAt.split("T")[0]}
      </span>
      <span className='info'>
        {order.updatedAt && order.updatedAt.split("T")[0]}
      </span>
      <span className='info'>
        <Link to={`/admin/order/${order._id}`}>
          <i className='fa-solid fa-angles-right' />
        </Link>
      </span>
    </div>
  ) : (
    <Loader />
  );
};

OrderCard.propTypes = {
  getUserById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getUserById })(OrderCard);
