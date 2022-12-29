import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

const Main = () => {
  return (
    <>
      <div id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super Value deals</h2>
        <h1>On all products</h1>

        <Link to="/homepage">
          <button>Shop NoW</button>
        </Link>
      </div>
    </>
  );
};

export default Main;
