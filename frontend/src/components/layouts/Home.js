import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='main'>
      <input
        className='search-input-phone hidden'
        type='text'
        placeholder='Search...'
      />
      <h1>Latest Products</h1>

      <div className='row'>
        <div className='column'>
          <div className='column-content'>
            <Link to='/product'>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Itsuki.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Nino.png' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
        <div className='column'>
          <div className='column-content'>
            <a href=''>
              <div className='product-image'>
                <img className='image' src='images/Miku.jpg' alt=''></img>
              </div>
              <div className='product-name'>
                <h5>Product Name</h5>
                <h2>PRICE</h2>
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default Home;
