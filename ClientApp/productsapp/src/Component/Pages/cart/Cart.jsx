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
    <div className="cart">
      {state.length === 0 ? (
        <h4 className="empty">Cart is Empty</h4>
      ) : (
        <div>
          <table
            style={
              {
                // width: "100%",
                // margin: "50px auto",
              }
            }
          >
            <thead
              style={{
                // backgroundColor: "black",
                paddingRight: "2em",
              }}
            >
              <tr
                style={{
                  backgroundColor: "black",
                  marginRight: "7rem",
                  color: "white",
                  cellPadding: "7px",
                }}
              >
                <th marginRight="0">Product</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quatity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody align="center">
              {state.map((item, index) => {
                return (
                  <tr>
                    <div className="card" key={index}>
                      <td>
                        {" "}
                        <img src={item.image} alt="" />
                      </td>

                      <td>
                        {" "}
                        <p>{item.title}</p>
                      </td>

                      <td>
                        {" "}
                        <p>{item.category}</p>
                      </td>

                      <td>
                        {" "}
                        <p>$ {item.quantity * item.price}</p>
                      </td>

                      <td>
                        <div className="quantity">
                          <button
                            onClick={() =>
                              dispatch({ type: "INCREASE", payload: item })
                            }
                          >
                            +
                          </button>
                          <p>{item.quantity}</p>
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
                        </div>
                      </td>
                      <td>
                        <h2
                          className="cancel"
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: item })
                          }
                        >
                          <AiFillDelete color="black" fontSize="25px" />
                        </h2>
                      </td>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {state.length > 0 && (
        <div className="total">
          <div></div>
          <Link to="/checkout">
            <button className="btn">CheckOut</button>
          </Link>{" "}
          <div className="totalValue">
            <Link to="/signin">
              <button className="btn">Create Account</button>
            </Link>
            <div>
              <span>Subtotal : ${Math.round(total)}</span>
            </div>
            <div>
              <span>Shipping Fee : $5</span>
            </div>
            <div>
              <span>Order Total : ${Math.round(total + Shipping)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
