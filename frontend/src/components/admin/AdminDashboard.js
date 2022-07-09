import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminDashboard = ({ admin }) => {
  return (
    <div className='main'>
      <h1>ADMIN DASHBOARD</h1>
      <Link to={"/admin/userlist"}>
        <h2>USERS</h2>
      </Link>
      <Link to={"/admin/productlist"}>
        <h2>PRODUCTS</h2>
      </Link>
      <Link to={"/admin/orderlist"}>
        <h2>ORDERS</h2>
      </Link>
    </div>
  );
};

AdminDashboard.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {})(AdminDashboard);
