import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editUser } from "../../actions/admin";

const EditUser = ({ auth, admin, editUser }) => {
  const [formData, setFormData] = useState({
    name: admin.userDetails.name,
    email: admin.userDetails.email,
    isAdmin: admin.userDetails.isAdmin ? true : false,
  });

  const { name, email, isAdmin } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkboxOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: !isAdmin });
  };

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(admin.userDetails._id, { name, email, isAdmin });
    navigate("/admin/userlist");
  };

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }

  if (
    admin.userDetails && // 👈 null and undefined check
    Object.keys(admin.userDetails).length === 0 &&
    Object.getPrototypeOf(admin.userDetails) === Object.prototype
  ) {
    return <Navigate to='/admin/userlist' />;
  }
  return (
    <div className='main'>
      <Link to='/admin/userlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <div className='admin-edit'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>EDIT USER</h1>
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
          <h2>Email</h2>
          <input
            className='register-input'
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <h2>Admin</h2>
          <input
            className='register-input'
            type='checkbox'
            placeholder='admin'
            name='isAdmin'
            checked={isAdmin}
            onChange={(e) => checkboxOnChange(e)}
          />
          <button className='btn edit-btn'>Save</button>
        </form>
      </div>
    </div>
  );
};

EditUser.propTypes = {
  editUser: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { editUser })(EditUser);
