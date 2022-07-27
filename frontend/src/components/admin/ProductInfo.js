import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProductById, getProductById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const ProductInfo = ({ auth, admin, getProductById, deleteProductById }) => {
  // Get product by id
  useEffect(() => {
    getProductById(productId);
  }, []);

  let params = useParams();
  let navigate = useNavigate();

  // get product id from params i.e. url
  const productId = params.id;

  const onClick = () => {
    let check = window.confirm(
      "Are you sure, this will permanently be deleted."
    );
    if (check) {
      deleteProductById(admin.productDetails._id);
      navigate("/admin/productlist");
    }
  };

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }
  return (
    <div className='main'>
      <Link to='/admin/productlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>PRODUCT DETAILS</h1>
      {!admin.loading ? (
        <div className='admin-user-info'>
          <div>
            <strong>Name: </strong>
            {admin.productDetails.name}
          </div>
          <div>
            <strong>Price:</strong> ₹ {admin.productDetails.price}
          </div>
          <div>
            <strong>Quantity:</strong> {admin.productDetails.quantity}
          </div>
          <Link to='/admin/product/edit'>
            <button className='btn edit-btn'>EDIT</button>
          </Link>
          <button className='btn delete-btn' onClick={() => onClick()}>
            DELETE
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

ProductInfo.propTypes = {
  getProductById: PropTypes.func.isRequired,
  deleteProductById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProductById, deleteProductById })(
  ProductInfo
);
