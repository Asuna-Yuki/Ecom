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
      <Link to='/admin'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>PRODUCTS</h1>
      <div className='admin-column'>
        <div className='info'>
          <h2>Id</h2>
        </div>
        <div className='info'>
          <h2>Name</h2>
        </div>
        <div className='info'>
          <h2>Price</h2>
        </div>
        <div className='info'>
          <h2>Quantity</h2>
        </div>
        <div className='info'>
          <h2></h2>
        </div>
      </div>
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
