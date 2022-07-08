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

  // return (
  //   <div className='column'>
  //     <div className='column-content'>
  //       {/* <Link to={`/product/${product._id}`}> */}
  //       <div className='product-name'>
  //         <h5>{user.name}</h5>
  //         <h2>{user.email}</h2>
  //       </div>
  //       {/* </Link> */}
  //     </div>
  //   </div>
  // );
};

export default connect(null, {})(UserCard);
