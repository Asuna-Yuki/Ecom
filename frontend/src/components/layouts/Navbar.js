import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLink = (
    <ul className='navlinks'>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
      <li>
        <Link to='/login'>Sign in</Link>
      </li>
    </ul>
  );

  const authLink = (
    <ul className='navlinks'>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          Logout
        </a>
      </li>
    </ul>
  );
  return (
    <header>
      <Link id='logo' to='/'>
        PROLOGO
      </Link>

      <input
        type='text'
        placeholder='Search products...'
        className='search-input'
      ></input>

      <Link className='cta' to='/search'>
        <button className='search-btn btn'>Search</button>
      </Link>

      <nav>
        {!loading && (
          <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
        )}
        <div className='navlinks-drop-down noActionDiv hidden' id='noActionDiv'>
          <div className='drop-down hidden noActionDiv' id='noActionDiv'>
            <div className='drop-down-menu' id='noActionDiv'>
              <Link to='/cart'>Cart</Link>
            </div>
            <div className='drop-down-menu' id='noActionDiv'>
              <Link to='/login'>Sign in</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
