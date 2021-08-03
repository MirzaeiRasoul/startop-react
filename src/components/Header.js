import React from 'react';

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" activeClassName="active">خانه</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/contact">تماس با ما</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/about">درباره ما</NavLink>
        </li>
      </ul>
      <Link to={'/'}><img className="logo" src={require('../img/logo.png')} alt="logo" /></Link>
    </header>
  );
}

export default Header;