import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Review from "./Review";
import { getProductById } from "../../actions/product";
import { addItemInCart } from "../../actions/cart";
import { setAlert } from "../../actions/alert";

const Product = ({
  singleProduct,
  getProductById,
  addItemInCart,
  setAlert,
}) => {
  // GEt product by id
  useEffect(() => {
    getProductById(productId);
  }, []);

  let params = useParams();

  // get product id from params i.e. url
  const productId = params.id;

  const [data, setData] = useState({ input: 1 });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    if (data.input <= singleProduct.quantity) {
      // add product to cart with data.input
      singleProduct.quantity = parseInt(data.input);
      addItemInCart(singleProduct);
      setAlert("Item added to cart.", "success");
    } else {
      // not enough produck in stock
      console.log("NOT ENOUGH PRODUCT IN STOCK.");
      setAlert("Not enough product in Stock.", "danger");
    }
  };

  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>

      <div className='row'>
        <div className='product-column-1'>
          <div className='product-page-img'>
            <img className='image' src={singleProduct.image} alt='' />
          </div>
        </div>
        <div className='product-column-2'>
          <div className='product-des'>
            <h1>{singleProduct.name}</h1>
            <hr></hr>
            <p>Price - ₹{singleProduct.price}</p>
            <hr></hr>
            <p>{singleProduct.description}</p>
          </div>
        </div>
        <div className='product-column-3'>
          <div className='product-detail'>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Price:</p>
                <p>₹{singleProduct.price}</p>
              </div>
            </div>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Status:</p>
                <p>
                  {singleProduct.quantity > 0 ? `In Stock` : `Out of Stock`}
                </p>
              </div>
            </div>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Quantity:</p>
                <p>
                  <input
                    type='number'
                    className='quantity-input'
                    name='input'
                    min={1}
                    max={5}
                    value={data.input}
                    onChange={(e) => onChange(e)}
                  />
                </p>
              </div>
            </div>
            <div className='product-detail-item'>
              <a href='#!'>
                <button className='add-to-cart btn' onClick={() => onClick()}>
                  Add to Cart
                </button>
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
  singleProduct: PropTypes.object.isRequired,
  getProductById: PropTypes.func.isRequired,
  addItemInCart: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  singleProduct: state.product.singleProduct,
});

export default connect(mapStateToProps, {
  getProductById,
  addItemInCart,
  setAlert,
})(Product);
