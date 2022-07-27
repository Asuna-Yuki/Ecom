import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrderByUserId } from "../../actions/order";
import MyOrdersCard from "./MyOrdersCard";
import { Link, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";

const MyOrders = ({ auth, getOrderByUserId, order }) => {
  // const userId = auth.user && auth.user._id;

  let params = useParams();

  const userId = params.id;

  // get orders by user id
  useEffect(() => {
    getOrderByUserId(userId);
  }, []);

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>ORDERS</h1>

      {!order.orderLoading ? (
        order.userOrders.map((order) => (
          <MyOrdersCard key={order._id} order={order} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

MyOrders.propTypes = {
  auth: PropTypes.object.isRequired,
  getOrderByUserId: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { getOrderByUserId })(MyOrders);
