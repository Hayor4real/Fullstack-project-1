import "./Checkout.css";
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div className="container">
      <h3>Billing Information</h3>
      <div className="row1">
        <input
          type="text"
          placeholder="First Name"
          className="inputFirst"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="inputSecond"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          className="countryInfo"
          required
        />
      </div>
      <div className="addressRow">
        <input
          type="text"
          placeholder="Street Address"
          className="streetAddress1"
          required
        />
        <input
          type="text"
          placeholder="street Address 2"
          className="streetAddress2"
        />
      </div>
      <div className="infoPlace">
        <input type="text" placeholder="city" className="city" required />
        <input type="text" placeholder="state" className="state" required />
        <input type="text" placeholder="zip code" className="code" required />
      </div>
      <Link to="/payment">
        <button className="infoBtn">NEXT</button>
      </Link>
    </div>
  );
}

export default CheckOut;
