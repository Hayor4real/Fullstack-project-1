import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop-page.css";
// import axios from "axios";
// axios.get
import Footer from "../../Footer/Footer";
import { AiFillStar } from "react-icons/ai";

import { Cartcontext } from "../../../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "../../Products/SingleProduct";

const Homepage = () => {
  const [data, setdata] = useState([]);
  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    setdata(await response);
    // setdata(response.data);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <>
      <div className="PageContainer">
        <div className="ProductContainer">
          {data.map((item, index) => {
            item.quantity = 1;
            return (
              <div className="CardProduct" key={index}>
                <div className="ImgContainerProduct">
                  <img src={item.image} alt="" className="ImgProduct" />
                </div>
                <h4 className="TitleProduct">{item.title}</h4>
                <h3
                  className="price"
                  style={{ color: "green", textAlign: "center" }}
                >
                  €{item.price}
                </h3>

                {/* <p>
                Rating {item.rating && item.rating.rate}
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
                <AiFillStar color="rgb(243, 181, 25)" fontSize="12px" />
              </p>
              <h4>reviews {item.rating.count}</h4> */}
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
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
