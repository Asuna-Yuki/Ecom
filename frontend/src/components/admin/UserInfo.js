import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserById } from "../../actions/admin";

const UserInfo = ({ getUserById, admin }) => {
  // GEt user by id
  useEffect(() => {
    getUserById(userId);
  }, []);

  let params = useParams();

  // get product id from params i.e. url
  const userId = params.id;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='main'>
      <Link to='/admin/userlist'>
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
            placeholder={admin.userDetails.name}
            name='name'
            value={name}
            onClick={(e) => {
              e.target.value = e.target.placeholder;
            }}
            onChange={(e) => onChange(e)}
            required
          />
          <h4>Email</h4>
          <input
            className='register-input'
            type='text'
            placeholder={admin.userDetails.email}
            name='email'
            value={email}
            onClick={(e) => {
              e.target.value = e.target.placeholder;
            }}
            onChange={(e) => onChange(e)}
            required
          />
          <button className='btn register-btn'>Register</button>
        </form>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  getUserById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getUserById })(UserInfo);
