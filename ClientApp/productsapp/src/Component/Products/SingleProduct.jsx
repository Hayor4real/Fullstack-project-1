import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Cartcontext } from "../../../src/context/Context";

import "./SingleProduct.css";
const colors = {
  orange: "#FE5800",
  grey: "#939393",
};

const SingleProduct = () => {
  const { id } = useParams();
  const [item, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  const Loading = () => {
    return (
      <>
        <div style={{ color: "red" }}>loading</div>
      </>
    );
  };

  const ShowProduct = () => {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = (value) => {
      setCurrentValue(value);
    };
    const handleMouseOver = (value) => {
      setHoverValue(value);
    };
    const handleMouseleave = (value) => {
      setHoverValue(undefined);
    };
    return (
      <>
        <div id="prodetails" class="section-p1">
          {(item.quantity = 1)}
          <div className="single-pro-image">
            <img src={item.image} alt={item.title} width="100%" id="MainImg" />
          </div>
          <div className="single-pro-details">
            <h1 className="textCategory">{item.category}</h1>
            <p>{item.description}</p>
            <h4 className="textTitle">{item.title}</h4>
            <p className="productStar">
              Rating {item.rating && item.rating.rate}
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseleave}
                  />
                );
              })}
            </p>
            <h2 className="price">€{item.price}</h2>

            <select>
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>Small</option>
              <option>Large</option>
            </select>

            <button
              className="btnadd"
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              add to Cart
            </button>

            <Link to="/cart">
              <button className="cart">Go to Cart</button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
