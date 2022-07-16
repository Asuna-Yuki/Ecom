import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllOrders } from "../../actions/admin";
import OrderCard from "./OrderCard";

const OrderList = ({ getAllOrders, admin }) => {
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div className='main'>
      <input
        className='search-input-phone hidden'
        type='text'
        placeholder='Search...'
      />
      <Link to='/admin'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>ORDERS</h1>
      <div className='admin-column'>
        <div className='info'>
          <h2>Id</h2>
        </div>
        <div className='info'>
          <h2>Name</h2>
        </div>
        <div className='info'>
          <h2>Email</h2>
        </div>
        <div className='info'>
          <h2>Admin</h2>
        </div>
        <div className='info'>
          <h2></h2>
        </div>
      </div>
      {admin.orderList.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
};

OrderList.propTypes = {
  getAllOrders: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getAllOrders })(OrderList);
