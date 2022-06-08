import React, { Fragment } from "react";

const Product = () => {
  return (
    <div class='main'>
      <a href='index.html' target='_self'>
        <button class='back-btn btn'>Go Back</button>
      </a>

      <div class='row'>
        <div class='product-column-1'>
          <div class='product-page-img'>
            <img class='image' src='images/Miku.jpg' alt=''></img>
          </div>
        </div>
        <div class='product-column-2'>
          <div class='product-des'>
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
        <div class='product-column-3'>
          <div class='product-detail'>
            <div class='product-detail-item'>
              <div class='row'>
                <p>Price:</p>
                <p>99$</p>
              </div>
            </div>
            <div class='product-detail-item'>
              <div class='row'>
                <p>Status:</p>
                <p>-----</p>
              </div>
            </div>
            <div class='product-detail-item'>
              <div class='row'>
                <p>Quantity:</p>
                <p>
                  <input type='number' class='quantity-input'></input>
                </p>
              </div>
            </div>
            <div class='product-detail-item'>
              <a href=''>
                <button class='add-to-cart btn'>Add to Cart</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='review-container'>
        <h2>REVIEWS</h2>
        <div class='review'>
          <p>Name</p>
          <p>date - 32/13/4020</p>
          <p>fiwehf hfeuiwhf ohfweohf oiahf oewih</p>
          <br></br>
          <hr></hr>
        </div>
        <div class='review'>
          <p>Name</p>
          <p>date - 32/13/4020</p>
          <p>fiwehf hfeuiwhf ohfweohf oiahf oewih</p>
          <br></br>
          <hr></hr>
        </div>
        <div class='review'>
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
