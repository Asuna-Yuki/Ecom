import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUserById, getUserById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const UserInfo = ({ auth, admin, getUserById, deleteUserById }) => {
  // GEt user by id
  useEffect(() => {
    getUserById(userId);
  }, []);

  let params = useParams();
  let navigate = useNavigate();

  // get user id from params i.e. url
  const userId = params.id;

  const onClick = () => {
    let check = window.confirm(
      "Are you sure, this will permanently be deleted."
    );
    if (check) {
      deleteUserById(admin.userDetails._id);
      navigate("/admin/userlist");
    }
  };

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <Link to='/admin/userlist'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>USER DETAILS</h1>
      {!admin.loading ? (
        <div className='admin-user-info'>
          <div>
            <strong>Name: </strong>
            {admin.userDetails.name}
          </div>
          <div>
            <strong>Email:</strong> {admin.userDetails.email}
          </div>
          <div>
            <strong>Access:</strong>{" "}
            {admin.userDetails.isAdmin ? `Admin` : `Not Admin`}
          </div>
          <Link to='/admin/user/edit'>
            <button className='btn edit-btn'>EDIT</button>
          </Link>
          <button className='btn delete-btn' onClick={() => onClick()}>
            DELETE
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

UserInfo.propTypes = {
  getUserById: PropTypes.func.isRequired,
  deleteUserById: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserById, deleteUserById })(
  UserInfo
);
