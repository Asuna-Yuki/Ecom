import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editProduct } from "../../actions/admin";

const EditProduct = ({ admin, editProduct }) => {
  const [formData, setFormData] = useState({
    name: admin.productDetails.name,
    price: admin.productDetails.price,
    description: admin.productDetails.description,
    quantity: admin.productDetails.quantity,
    image: admin.productDetails.image,
  });

  const { name, price, quantity, description, image } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editProduct(admin.productDetails._id, {
      name,
      price,
      quantity,
      description,
      image,
    });
  };

  if (
    admin.productDetails && // 👈 null and undefined check
    Object.keys(admin.productDetails).length === 0 &&
    Object.getPrototypeOf(admin.productDetails) === Object.prototype
  ) {
    return <Navigate to='/admin/productlist' />;
  }
  return (
    <div className='main'>
      <Link to='/admin/productlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='admin-edit'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>EDIT PRODUCT</h1>
          <hr />
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
          <button className='btn edit-btn'>Save</button>
        </form>
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  editProduct: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { editProduct })(EditProduct);
