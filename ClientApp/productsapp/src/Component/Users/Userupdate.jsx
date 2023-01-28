import { useState, useEffect } from "react";
import "./NewUser.css";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../../Utility/contant";

function UpdateUser(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    price: "",
    rating: "",
    description: "",
    category: "",
    supply: "",
  });
  useEffect(() => {
    fetch(`${baseUrl}/users/specificuser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          name: data.results[0].name,
          price: data.results[0].price,
          rating: data.results[0].rating,
          description: data.results[0].description,
          category: data.results[0].category,
          supply: data.results[0].supply,
        });
      });
  }, []);
  const sendData = () => {
    fetch(`${baseUrl}users/updateuser/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        setUser({
          name: "",
          price: "",
          rating: "",
          description: "",
          category: "",
          supply: "",
        });
      });
    navigate("/users");
  };
  return (
    <div className=" auth-form-Container">
      <h4>Update the Product </h4>
      <div className="reg-form">
        <div>
          <input
            type="text"
            value={user.name}
            placeholder="Enter Name"
            onChange={(event) => {
              setUser({
                ...user,
                name: event.target.value,
              });
            }}
          />
        </div>

        <div>
          <input
            value={user.price}
            type="text"
            placeholder="Enter Price"
            onChange={(event) => {
              setUser({
                ...user,
                price: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={user.rating}
            placeholder="Enter Rating"
            onChange={(event) => {
              setUser({
                ...user,
                rating: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={user.description}
            placeholder="Enter Description"
            onChange={(event) => {
              setUser({
                ...user,
                description: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={user.category}
            placeholder="Enter Category"
            onChange={(event) => {
              setUser({
                ...user,
                category: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={user.supply}
            placeholder="Enter Supply"
            onChange={(event) => {
              setUser({
                ...user,
                supply: event.target.value,
              });
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={sendData}>Register update product</button>
      </div>
    </div>
  );
}

export default UpdateUser;
