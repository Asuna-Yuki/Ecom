import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getOrderById } from "../../actions/order";

const Order = ({ auth: { loading, isAuthenticated }, getOrderById, order }) => {
  // GEt product by id
  useEffect(() => {
    getOrderById(orderId);
  }, []);

  let params = useParams();

  const orderId = params.id;
  console.log(order.orderDetail);

  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <div className='main'>
      <Link to='/payment'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>{orderId}</h1>
    </div>
  );
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
