import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = (props) => {
  const [state, setState] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4001/users/specificuser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setState(data.results);
      });
  }, []);
  return (
    <div className="SingleContainer">
      <h2 style={{ textAlign: "center", color: "red", marginBottom: "1em" }}>
        Single Product Details
      </h2>
      {state.length > 0 ? (
        <table className="SingleTableList">
          <thead
            style={{
              backgroundColor: "#1b2430",

              color: "white",
              height: "5vh",
            }}
          >
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>DESCRIPTION</th>
              <th>CATEGORY</th>
              <th>RATING</th>
              <th>SUPPLY</th>
            </tr>
          </thead>
          <tbody align="center">
            <tr style={{ margin: "60px" }}>
              <th>{state[0].name}</th>
              <th>{state[0].price}€</th>
              <th>{state[0].description}</th>
              <th>{state[0].category}</th>
              <th>{state[0].rating}</th>
              <th>{state[0].supply}</th>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Data is not available</div>
      )}
    </div>
  );
};

export default UserDetails;
