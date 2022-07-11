import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const ProductInfo = ({ getProductById, admin }) => {
  // GEt user by id
  useEffect(() => {
    getProductById(productId);
  }, []);

  let params = useParams();

  // get product id from params i.e. url
  const productId = params.id;
  return (
    <div className='main'>
      <Link to='/admin/productlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>PRODUCT DETAILS</h1>
      {!admin.loading ? (
        <div>
          <h2>Name:</h2>
          <h2>{admin.productDetails.name}</h2>
          <h2>Price:</h2>
          <h2>{admin.productDetails.price}</h2>
          <h2>Description:</h2>
          <h2>{admin.productDetails.description}</h2>
          <h2>Quantity:</h2>
          <h2>{admin.productDetails.quantity}</h2>
          <h2>Image:</h2>
          <h2>{admin.productDetails.image} </h2>
          <Link to='/admin/product/edit'>
            <button className='btn primary-btn'>EDIT</button>
          </Link>
          <button className='btn primary-btn'>DELETE</button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

ProductInfo.propTypes = {
  getProductById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getProductById })(ProductInfo);
