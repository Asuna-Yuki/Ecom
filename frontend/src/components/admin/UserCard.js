import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  return (
    <div className='admin-column'>
      <span className='info'>{user._id}</span>
      <span className='info'>{user.name}</span>
      <span className='info'>{user.email}</span>
      <span className='info'>{user.isAdmin ? `Admin` : `Not Admin`}</span>
      <span className='info'>
        <Link to={`/admin/user/${user._id}`}>
          <i className='fa-solid fa-angles-right' />

          {/* <button className='btn' /> */}
        </Link>
      </span>
    </div>
  );
};

export default connect(null, {})(UserCard);
