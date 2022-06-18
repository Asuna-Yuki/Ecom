import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";
import { getAllProducts } from "../../actions/product";

const Home = ({ getAllProducts }) => {
  useEffect(() => {
    getAllProducts();
  }, []);
  const products = [
    {
      id: 1,
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/Miku.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      id: 2,
      name: "askfhjskdh",
      image: "/images/Nino.png",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
  ];
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
          <Card key={product.id} product={product} />
        ))}
        {/* <div className='column'>
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
        </div> */}
      </div>

      <hr></hr>
    </div>
  );
};

Home.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};

export default connect(null, { getAllProducts })(Home);
