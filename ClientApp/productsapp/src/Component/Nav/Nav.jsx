import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="navContainer">
      <Link to="/">Home</Link>
      <Link to="/users">Products</Link>
      <Link to="/newuser">New Products</Link>
    </div>
  );
}

export default Nav;
