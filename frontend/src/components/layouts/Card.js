import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ product }) => {
  return (
    <div className='column'>
      <div className='column-content'>
        <Link to={`/product/${product._id}`}>
          <div className='product-image'>
            <img className='image' src={product.image} alt=''></img>
          </div>
          <div className='product-name'>
            <h5>{product.name}</h5>
            <h2>{product.price}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, {})(Card);
