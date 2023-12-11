// Components/NavBar.js
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import React from "react";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
