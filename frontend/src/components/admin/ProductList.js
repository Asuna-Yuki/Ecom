import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProducts } from "../../actions/admin";
import ProductCard from "./ProductCard";

const ProductList = ({ getAllProducts, admin }) => {
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className='main'>
      <input
        className='search-input-phone hidden'
        type='text'
        placeholder='Search...'
      />
      <h1>ADMIN</h1>
      {admin.productList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getAllProducts })(ProductList);
