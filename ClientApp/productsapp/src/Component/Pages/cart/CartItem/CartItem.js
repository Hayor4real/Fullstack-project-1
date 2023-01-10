import React from "react";
import "./CartItem.css";
const CartItem = ({ item, value }) => {
  const { title, img, price, total, count, cat } = item;
  // const { increment, decrement, removeItem } = value;
  return (
    <tbody>
      <tr>
        <td>
          <img src={img} style={{ width: "3rem", height: "3rem" }} />
        </td>
        <td>{title}</td>
        <td>{cat}</td>
        <td>£{price}</td>
        <td className="BtnContainerCartItem">
          <button
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "DECREASE", payload: item });
              } else {
                dispatch({ type: "REMOVE", payload: item });
              }
            }}
            className="Btn"
          >
            -
          </button>

          <span className="BtnSpanCartItem">{count}</span>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: item })}
            className="Btn"
          >
            +
          </button>
        </td>

        <td>
          <button
            className="cancel"
            onClick={() => dispatch({ type: "REMOVE", payload: item })}
          >
            <AiFillDelete className="delete" />
          </button>
        </td>

        <td>£{total}</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
