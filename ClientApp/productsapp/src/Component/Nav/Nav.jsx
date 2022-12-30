import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";

function Nav() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  // const dispatch = Globalstate.dispatch;
  return (
    <div className="navContainer">
      <div>
        <Link to="/homepage">Shop</Link>
      </div>
      <div>
        <Link to="/">Home</Link>

        <Link to="cart">
          <FaShoppingCart color="white" fontSize="20px" />
          {state.length > 0 && (
            <div className="cart-count">
              <span>{state.length}</span>
            </div>
          )}
        </Link>
        <Link to="/users">Products</Link>
        <Link to="/newuser">New Products</Link>
      </div>
    </div>
  );
}

export default Nav;
