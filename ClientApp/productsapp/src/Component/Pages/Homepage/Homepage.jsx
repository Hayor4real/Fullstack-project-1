import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

import { Cartcontext } from "../../../context/Context";

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
            <p>{item.title}</p>
            <h3>€{item.price}</h3>
            <p className="category">{item.category}</p>
            <p>
              Rating {item.rating && item.rating.rate}
              <AiFillStar />
            </p>
            <p>reviews {item.rating.count}</p>
            <button
              className="btn"
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
