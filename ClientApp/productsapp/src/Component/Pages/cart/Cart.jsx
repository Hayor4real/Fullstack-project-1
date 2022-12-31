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
          {state.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>$ {item.quantity * item.price}</p>
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
                <h2
                  className="cancel"
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  <AiFillDelete color="black" fontSize="25px" />
                </h2>
              </div>
            );
          })}
        </div>
      )}
      {state.length > 0 && (
        <div className="total">
          <Link to="/checkout">
            <button className="btn">CheckOut</button>
          </Link>
          <h2>
            {" "}
            <div className="totalValue">
              <button className="btn">CheckOut</button>
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
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
