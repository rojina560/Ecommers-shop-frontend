import React, { useState } from 'react';

import './Navbar.css'
import logo from '../Assests/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]  = useState('shop')
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu('shop')}>Shop{menu ==='shop' ? <hr/>:<></>}</li>
          <li onClick={() => setMenu('mens')}>mens{menu ==='mens' ? <hr/>:<></>}</li>
          <li onClick={() => setMenu('womens')}>womens{menu ==='womens' ? <hr/>:<></>}</li>
          <li onClick={() => setMenu('kid')}>kid{menu ==='kid' ? <hr/>:<></>}</li>
         
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <h1 className="text-4xl">
            {" "}
            <FaShoppingCart></FaShoppingCart>
          </h1>

          <div className="nav-cart-count">0</div>
        </div>
      </div>
    );
};

export default Navbar;