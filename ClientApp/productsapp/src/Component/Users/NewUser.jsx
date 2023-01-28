import { useState } from "react";
import "./NewUser.css";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Utility/contant";

function NewUser(props) {
  const navigate = useNavigate();
  const [newuser, setNewUser] = useState({
    name: "",
    price: "",
    rating: "",
    description: "",
    category: "",
    supply: "",
  });

  const sendDataToServer = () => {
    fetch(`${baseUrl}users/newuser`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Inserted data sucessfully");
        setNewUser({
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
      <h4>Register Product </h4>
      <div className="reg-form">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                name: event.target.value,
              });
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Price"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                price: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Rating"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                rating: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Description"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                description: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Category"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                category: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Supply"
            onChange={(event) => {
              setNewUser({
                ...newuser,
                supply: event.target.value,
              });
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={sendDataToServer}>Register New Product</button>
      </div>
    </div>
  );
}

export default NewUser;
