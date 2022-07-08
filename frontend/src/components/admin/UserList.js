import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../../actions/admin";
import UserCard from "./UserCard";

const UserList = ({ getAllUsers, admin }) => {
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className='main'>
      <input
        className='search-input-phone hidden'
        type='text'
        placeholder='Search...'
      />
      <h1>USERS</h1>
      <div className='admin-column'>
        <div className='info'>
          <h2>Id</h2>
        </div>
        <div className='info'>
          <h2>Name</h2>
        </div>
        <div className='info'>
          <h2>Email</h2>
        </div>
        <div className='info'>
          <h2>Admin</h2>
        </div>
        <div className='info'>
          <h2></h2>
        </div>
      </div>
      {admin.userList.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getAllUsers })(UserList);
