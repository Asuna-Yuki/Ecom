import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductById } from "../../actions/admin";

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
      <h1>{admin.productDetails.name}</h1>
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
