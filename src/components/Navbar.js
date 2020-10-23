import React, { Fragment } from "react";
import '../css/Nav.css'
const Navbar = () => {
  return (
    <Fragment>
      <div class='topnav' id='myTopnav'>
        <a href='#home' class='active'>
          Home
        </a>
        <a href='#news'>News</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
        <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
          <i class='fa fa-bars'></i>
        </a>
      </div>
    </Fragment>
  );
};

export default Navbar;
