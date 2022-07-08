import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getOrderById } from "../../actions/order";

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
        <h1>{orderId}</h1>
        <hr />
        <h2>Name : {user.name}</h2>
        <h3>Email : {user.email}</h3>
        <hr />
        <p>
          Address :{" "}
          {!orderLoading ? orderDetail.shippingAddress.address : `spinner`}
        </p>
        <hr />
        <p>Payment : {!orderLoading ? orderDetail.paymentMethod : `spinner`}</p>
        <h4>{!orderLoading ? orderDetail.orderItems[0].name : `spinner`}</h4>
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
