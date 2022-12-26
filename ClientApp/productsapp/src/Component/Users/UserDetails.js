import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var cardStyle = {
  width: "300px",
  padding: "7rem",
  margin: "50px auto",
  boxShadow: "0 0 10px black",
  textAlign: "center",
  height: "100%",
  color: "blue",
  borderRadius: "30px",
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
        <div>
          <h3>NAME: {state[0].name}</h3>
          <h4>PRICE: {state[0].price}€</h4>
          <h4>DESCRIPTION: {state[0].description}</h4>
          <h4>CATEGORY: {state[0].category}</h4>
          <h4>RATING: {state[0].rating}</h4>
          <h4>SUPPLY: {state[0].supply}</h4>
        </div>
      ) : (
        <div>Data is not available</div>
      )}
    </div>
  );
};

export default UserDetails;
