import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

import { Cartcontext } from "../../../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "../../Products/SingleProduct";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <div className="des">
              <div className="price">€{item.price}</div>
              <h5>{item.title}</h5>
              <div className="star">
                Rating {item.rating && item.rating.rate}
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
              </div>
              <p className="category">{item.category}</p>
              <p>reviews {item.rating.count}</p>
            </div>
            {/* <button
              className="btn"
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              add to cart
            </button> */}

            <Link to={`/products/${item.id}`}>
              <button className="details">Buy Now</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
