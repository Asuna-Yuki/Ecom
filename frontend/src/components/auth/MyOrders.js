import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrderByUserId } from "../../actions/order";
import MyOrdersCard from "./MyOrdersCard";
import { useParams } from "react-router-dom";

const MyOrders = ({ auth, getOrderByUserId, order }) => {
  // const userId = auth.user && auth.user._id;

  let params = useParams();

  const userId = params.id;

  // get orders by user id
  useEffect(() => {
    getOrderByUserId(userId);
  });

  return <div>MyOrders</div>;
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
