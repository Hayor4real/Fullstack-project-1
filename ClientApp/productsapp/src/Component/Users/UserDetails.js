import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var cardStyle = {
  width: "80%",
  padding: "7rem",
  // border: "1px solid black",
  margin: "50px auto",
  boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  height: "200%",
  color: "black",
  borderRadius: "30px",
  backgroundColor: "white",
};

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
    <div style={cardStyle}>
      {state.length > 0 ? (
        <table
          cellPadding={10}
          style={{
            width: "100%",
            margin: "50px auto",
          }}
        >
          <thead
            style={{
              backgroundColor: "black",
              padding: "15px",
              color: "white",
              marginBottom: "60px",
            }}
          >
            <tr style={{ margin: "60px" }}>
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
