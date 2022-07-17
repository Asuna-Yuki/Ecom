import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserById } from "../../actions/admin";
import Loader from "../layouts/Loader";

const UserInfo = ({ getUserById, admin }) => {
  // GEt user by id
  useEffect(() => {
    getUserById(userId);
  }, []);

  let params = useParams();

  // get product id from params i.e. url
  const userId = params.id;
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
          <div>
            <Link to='/admin/user/edit'>
              <button className='btn primary-btn'>EDIT</button>
            </Link>
            <button className='btn primary-btn'>DELETE</button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
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
