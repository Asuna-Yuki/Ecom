import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <span>{product._id} </span>
      <span>{product.name} </span>
      <span>{product.quantity} </span>
      <span>{product.price} </span>
      <span>
        <Link to={`/admin/product/${product._id}`}>
          <button className='btn' />
        </Link>
      </span>
    </div>
  );
};

export default connect(null, {})(ProductCard);
