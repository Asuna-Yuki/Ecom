import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminDashboard = ({ admin, auth }) => {
  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <h1>ADMIN DASHBOARD</h1>
      <div className='admin-dashboard'>
        <Link className='admin-dashboard-list' to={"/admin/userlist"}>
          <h2>USERS</h2>
        </Link>
        <Link className='admin-dashboard-list' to={"/admin/productlist"}>
          <h2>PRODUCTS</h2>
        </Link>
        <Link className='admin-dashboard-list' to={"/admin/product/create"}>
          <h2>CREATE PRODUCT</h2>
        </Link>
        <Link className='admin-dashboard-list' to={"/admin/orderlist"}>
          <h2>ORDERS</h2>
        </Link>
      </div>
    </div>
  );
};

AdminDashboard.propTypes = {
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminDashboard);
