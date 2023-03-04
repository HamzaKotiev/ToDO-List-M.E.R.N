import React from "react";

import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper navbar blue">
          <a href="/" className="brand-logo">
            M.E.R.N Todo App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Войти</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
