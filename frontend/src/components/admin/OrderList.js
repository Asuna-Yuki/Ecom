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
      <Link to='/admin'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>ORDERS</h1>
      <div className='admin-column admin-order'>
        <div className='info'>
          <h2>Id</h2>
        </div>
        <div className='info'>
          <h2>Name</h2>
        </div>
        <div className='info'>
          <h2>Delivery</h2>
        </div>
        <div className='info'>
          <h2>Bill</h2>
        </div>
        <div className='info'>
          <h2>Order Date</h2>
        </div>
        <div className='info'>
          <h2>Order Items</h2>
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
