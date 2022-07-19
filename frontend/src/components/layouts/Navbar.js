import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
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

  const authLink =
    user && !user.isAdmin ? (
      <ul className='navlinks'>
        <li>
          <Link to='/cart'>
            <i className='fa-solid fa-cart-shopping' />
            <span> </span>Cart
          </Link>
        </li>
        <li>
          <a onClick={logout} href='#!'>
            Logout
          </a>
        </li>
      </ul>
    ) : (
      <ul className='navlinks'>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fa-solid fa-cart-shopping' />
            <span> </span>Cart
          </Link>
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
      <div className='search'>
        <input
          type='text'
          placeholder='Search products...'
          className='search-input'
        />

        <Link className='cta' to='/search'>
          <button className='search-btn btn'>Search</button>
        </Link>
      </div>
      <label className='nav-toggle-lable' htmlFor='nav-toggle'>
        <span />
        <span />
        <span />
      </label>
      <input type='checkbox' className='nav-toggle' id='nav-toggle' />
      <nav>{!loading && (isAuthenticated ? authLink : guestLink)}</nav>
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
