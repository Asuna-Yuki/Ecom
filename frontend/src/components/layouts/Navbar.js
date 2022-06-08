import React from "react";

const Navbar = () => {
  return (
    <header>
      <a id='logo' href='index.html'>
        PROLOGO
      </a>

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
            <a href='cart.html' target='_self'>
              Cart
            </a>
          </li>
          <li>
            <a href='login.html' target='_self'>
              Sign in
            </a>
          </li>
        </ul>
        <div className='navlinks-drop-down noActionDiv hidden' id='noActionDiv'>
          <div className='drop-down hidden noActionDiv' id='noActionDiv'>
            <div className='drop-down-menu' id='noActionDiv'>
              <a href='cart.html' target='_self'>
                Cart
              </a>
            </div>
            <div className='drop-down-menu' id='noActionDiv'>
              <a href='login.html' target='_self'>
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
