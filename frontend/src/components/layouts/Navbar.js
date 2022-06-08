import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

      <a className='cta' href='#' target='_self'>
        <button className='search-btn btn'>Search</button>
      </a>

      <nav>
        <ul className='navlinks'>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/login'>Sign in</Link>
          </li>
        </ul>
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

export default Navbar;
