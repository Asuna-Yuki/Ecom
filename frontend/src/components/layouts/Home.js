import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";
import { getAllProducts } from "../../actions/product";

const Home = ({ getAllProducts, product: { products } }) => {
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
      <h1>Latest Products</h1>

      <div className='row'>
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>

      <hr></hr>
    </div>
  );
};

Home.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getAllProducts })(Home);
