import React from 'react'
import SS from './assets/SS'
import { routes } from './config'

import './scss/header-mobile.scss';

function HeaderMobile() {
     const toggleMenu = () => {
       const myLinks = document.getElementById("myLinks");
       myLinks.style.display =
         myLinks.style.display === "block" ? "none" : "block";
     };
 
    return (
    <div className="topnav">
      <a href="#home" className="active"><SS /></a>
      <div id="myLinks">
       {routes.map(m => (
        <a href="">{m}</a>
       ))}
       <a href="">Sign Up</a>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default HeaderMobile