import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  return (
    <div>
      <span>{user._id} </span>
      <span>{user.name} </span>
      <span>{user.email} </span>
      <span>{user.isAdmin} </span>
      <span>
        <Link to={`/admin/user/${user._id}`}>
          <button className='btn' />
        </Link>
      </span>
    </div>
  );
};

export default connect(null, {})(UserCard);
