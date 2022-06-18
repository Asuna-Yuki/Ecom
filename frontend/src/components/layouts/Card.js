import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className='column'>
      <div className='column-content'>
        <Link to='/product'>
          <div className='product-image'>
            <img className='image' src={props.product.image} alt=''></img>
          </div>
          <div className='product-name'>
            <h5>{props.product.name}</h5>
            <h2>PRICE</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default connect(null, {})(Card);
