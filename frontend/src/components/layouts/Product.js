import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>

      <div className='row'>
        <div className='product-column-1'>
          <div className='product-page-img'>
            <img className='image' src='images/Miku.jpg' alt=''></img>
          </div>
        </div>
        <div className='product-column-2'>
          <div className='product-des'>
            <h1>Product Name</h1>
            <hr></hr>
            <p>Price</p>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sit, voluptate culpa optio totam molestiae
              consequuntur dolor ipsum magni facilis, inventore neque quia
              maxime odio laboriosam eligendi? Quae, expedita aperiam.
            </p>
          </div>
        </div>
        <div className='product-column-3'>
          <div className='product-detail'>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Price:</p>
                <p>99$</p>
              </div>
            </div>
            <div className='product-detail-item'>
              <div className='row'>
                <p>Status:</p>
                <p>-----</p>
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
        <div className='review'>
          <p>Name</p>
          <p>date - 32/13/4020</p>
          <p>fiwehf hfeuiwhf ohfweohf oiahf oewih</p>
          <br></br>
          <hr></hr>
        </div>
        <div className='review'>
          <p>Name</p>
          <p>date - 32/13/4020</p>
          <p>fiwehf hfeuiwhf ohfweohf oiahf oewih</p>
          <br></br>
          <hr></hr>
        </div>
        <div className='review'>
          <p>Name</p>
          <p>date - 32/13/4020</p>
          <p>fiwehf hfeuiwhf ohfweohf oiahf oewih</p>
          <br></br>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Product;
