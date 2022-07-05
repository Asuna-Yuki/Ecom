import { connect } from "react-redux";
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Order = ({ auth: { loading, isAuthenticated }, order }) => {
  let params = useParams();
  if (!loading && !isAuthenticated) {
    return <Navigate to='/' />;
  }
  console.log(order);

  const orderId = params.id;
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, {})(Order);
