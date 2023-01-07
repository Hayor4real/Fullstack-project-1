import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Cartcontext } from "../../../src/context/Context";
import "./SingleProduct.css";

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
        <div className="skeleton" style={{ lineHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="singleProduct">
        {(item.quantity = 1)};
        <div className="imgProduct">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="productInfo">
          <h4 className="textCategory">{item.category}</h4>
          <h1 className="textTitle">{item.title}</h1>
          <p className="productStar">
            Rating {item.rating && item.rating.rate}
            <AiFillStar />
          </p>
          <h3 className="price">€{item.price}</h3>
          <p className="lead">{item.description}</p>
          <div className="btnValue">
            <button
              className="btnadd"
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              add to cart
            </button>
            <Link to="/cart">
              <button className="cart"> Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
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
