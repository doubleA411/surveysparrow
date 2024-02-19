import React from 'react'
import SS from "./assets/SS";
import arrow from "./assets/arrow-down-1.svg";
import globe from "./assets/globe.svg";
import { routes } from "./config";

import './scss/_header.scss'

function Header() {
  return (
    
    <div className="header">
      <div className="header-left">
        <SS />
        {routes.map((route) => (
          <div className="route">
            <p>{route}</p>
            <img src={arrow} alt="" />
          </div>
        ))}
      </div>
      <div className="header-right">
        <div className="lang">
          <img src={globe} alt="" />
          <p>English</p>
          <img src={arrow} alt="" />
        </div>
        <p>+1 (800)481-0410</p>
        <p className="signup-btn">Sign Up</p>
      </div>
    </div>
  );
}

export default Header