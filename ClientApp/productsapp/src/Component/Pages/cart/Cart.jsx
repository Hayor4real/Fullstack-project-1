import { useContext } from "react";
import { Cartcontext } from "../../../context/Context";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const Shipping = total + 5;

  return (
    <div className="ContainerCart">
      {state.length === 0 ? (
        <h4 className="empty" style={{ color: "red" }}>
          Cart is Empty
        </h4>
      ) : (
        <div className="TableContainerCartList">
          <table className="CartTableCartList">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Total</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody align="center">
              {state.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={item.image}
                        alt=""
                        style={{ width: "3rem", height: "3rem" }}
                      />
                    </td>

                    <td>{item.title}</td>

                    <td>{item.category}</td>

                    <td>€{item.price}</td>

                    <td>€ {Math.round(item.quantity * item.price)}</td>

                    <td className="BtnContainerCartItem">
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        +
                      </button>
                      <span className="BtnContainerCartItem">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="RemoveBtnCartItem"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                    {/* </div> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {state.length > 0 && (
        <div className="ContainerTotals">
          <Link to="/checkout">
            <button className="BtnTotals">CheckOut</button>
          </Link>{" "}
          <h3>
            <strong>Subtotal : €{Math.round(total)}</strong>
          </h3>
          <h3>
            <strong>Shipping Fee : €5</strong>
          </h3>
          <h3>
            <strong>Order Total : €{Math.round(total + Shipping)}</strong>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
