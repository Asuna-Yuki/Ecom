import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Review from "./Review";

const Product = ({ products: { products } }) => {
  let params = useParams();

  // get product id from params i.e. url
  const productId = params.id;

  // GEt product by id
  const product = products.filter((product) => product._id === productId);

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>

      <div className='row'>
        <div className='product-column-1'>
          <div className='product-page-img'>
            <img className='image' src={product[0].image} alt='' />
          </div>
        </div>
        <div className='product-column-2'>
          <div className='product-des'>
            <h1>{product[0].name}</h1>
            <hr></hr>
            <p>Price - {product[0].price}</p>
            <hr></hr>
            <p>{product[0].description}</p>
          </div>
        </div>
        <div className='product-column-3'>
          <div className='product-detail'>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Price:</p>
                <p>{product[0].price}</p>
              </div>
            </div>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Status:</p>
                <p>{product[0].quantity > 0 ? `In Stock` : `Out of Stock`}</p>
              </div>
            </div>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Quantity:</p>
                <p>
                  <input type='number' className='quantity-input'></input>
                </p>
              </div>
            </div>
            <div className='product-detail-item'>
              <a href=''>
                <button className='add-to-cart btn'>Add to Cart</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='review-container'>
        <h2>REVIEWS</h2>
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product,
});

export default connect(mapStateToProps, {})(Product);
