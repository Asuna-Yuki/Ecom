import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className='admin-column'>
      <span className='info'>{product._id}</span>
      <span className='info'>{product.name}</span>
      <span className='info'>{product.price}</span>
      <span className='info'>{product.quantity}</span>
      <span className='info'>
        <Link to={`/admin/product/${product._id}`}>
          <i className='fa-solid fa-angles-right' />
        </Link>
      </span>
    </div>
  );
};

export default connect(null, {})(ProductCard);
