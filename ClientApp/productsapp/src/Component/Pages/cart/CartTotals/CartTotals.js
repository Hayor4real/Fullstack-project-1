import { NavLink } from "react-router-dom";

import React from "react";
import "./CartTotals.css";

const CartTotals = ({ value, history }) => {
  return (
    <div className="ContainerTotals">
      <NavLink to="/homepage">
        <button className="BtnTotals" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </NavLink>
      <h3>
        <strong>SUBTOTAL : </strong>£{cartSubTotal}
      </h3>
      <h3>
        <strong>Tax : </strong>£{cartTax}
      </h3>
      <h3>
        <strong>TOTAL : </strong>£{cartTotal}
      </h3>
    </div>
  );
};

export default CartTotals;
