import React, { useState } from 'react';

import './Navbar.css'
import logo from '../Assests/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]  = useState('shop')
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link to={"/"}>Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link to={"/mens"}>Mens</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link to={"/womens"}> Womens</Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kid")}>
            <Link to={"/kids"}>Kids</Link>
            {menu === "kid" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <h1 className="text-4xl">
            <Link to={'/cart'}>
              
              <FaShoppingCart></FaShoppingCart>
            </Link>
          </h1>

          <div className="nav-cart-count">0</div>
        </div>
      </div>
    );
};

export default Navbar;