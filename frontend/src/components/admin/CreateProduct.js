import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProduct } from "../../actions/admin";

const CreateProduct = ({ auth, admin, createProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    image: "/images/placeholder.jpg",
  });

  const { name, price, quantity, description, image } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    createProduct({
      name,
      price,
      quantity,
      description,
      image,
    });
    navigate("/admin/productlist");
  };

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <Link to='/admin/productlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='admin-edit'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>CREATE PRODUCT</h1>

          <h2>Name</h2>
          <input
            className='register-input'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
          <h2>Price</h2>
          <input
            className='register-input'
            type='number'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
            required
          />
          <h2>Quantity</h2>
          <input
            className='register-input'
            type='number'
            placeholder='Quantity'
            name='quantity'
            value={quantity}
            onChange={(e) => onChange(e)}
            required
          />
          <h2>Description</h2>
          <input
            className='register-input'
            type='text'
            placeholder='Description'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
            required
          />
          <h2>Image</h2>
          <input
            className='register-input'
            type='text'
            placeholder='Image'
            name='image'
            value={image}
            onChange={(e) => onChange(e)}
            required
          />
          <button className='btn edit-btn'>Create</button>
        </form>
      </div>
    </div>
  );
};

CreateProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { createProduct })(CreateProduct);
