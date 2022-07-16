import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getUserById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const OrderCard = ({ order, getUserById, admin }) => {
  // useEffect(() => {
  //   getUserById(order.user);
  // }, []);

  return !order.loading ? (
    <div className='admin-column'>
      <span className='info'>{order._id}</span>
      <span className='info'>{order.user.name}</span>
      <span className='info'>{}</span>
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
