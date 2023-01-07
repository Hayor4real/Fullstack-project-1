import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Cartcontext } from "../../context/Context";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState("false");
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  // const dispatch = Globalstate.dispatch;

  return (
    <nav>
      <Link className="navEnd" to="/homepage">
        Shop
      </Link>
      <div>
        <ul id="navbar" className={show ? "#navbar" : "#navbar active"}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/users">Products</Link>
          </li>
          <li>
            <Link to="/newuser">New Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart backGroundColor="white" fontSize="40px" />
              {state.length > 0 && (
                <div className="cart-count">
                  <span>{state.length}</span>
                </div>
              )}
            </Link>
          </li>
        </ul>
      </div>

      <button id="mobile" onClick={() => setShow(!show)}>
        {show ? <FaBars /> : <FaTimes />}
      </button>
    </nav>
  );
}

export default Nav;
