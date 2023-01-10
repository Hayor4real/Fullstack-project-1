import React from "react";
import CartItem from "../CartItem/CartItem";
import CartColumns from "../../cart/CartColumns/CartCoulmns";
import "./CartList.css";

import "./CartList.css";
const CartList = () => {
  return (
    <div className="TableContainerCartList">
      <table className="CartTableCartList">
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </table>
    </div>
  );
};

export default CartList;
