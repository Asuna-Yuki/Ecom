import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserById } from "../../actions/admin";

const User = ({ getUserById, admin }) => {
  // GEt user by id
  useEffect(() => {
    getUserById(userId);
  }, []);

  let params = useParams();

  // get product id from params i.e. url
  const userId = params.id;

  const [formData, setFormData] = useState({
    name: admin.userDetails.name,
    email: admin.userDetails.email,
  });

  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='main'>
      <Link to='/'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='register'>
        <h1>Register</h1>
        <hr></hr>
        <form onSubmit={(e) => onSubmit(e)}>
          <h4>Name</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Name'
            name='name'
            defaultValue={!admin.loading ? admin.userDetails.name : ``}
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>Email</h4>
          <input
            className='register-input'
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <button className='btn register-btn'>Register</button>
        </form>
      </div>
    </div>
  );
};

User.propTypes = {
  getUserById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getUserById })(User);
