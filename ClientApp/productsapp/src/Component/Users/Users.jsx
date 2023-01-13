import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

import { TbListDetails } from "react-icons/tb";
import "./Users.css";

function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:4001/users/userdata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  };
  const deleteData = (id) => {
    fetch(`http://localhost:4001/users/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        getData();
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "black" }}>Users Informations</h2>

      {/* <button onClick={latestData}>Users</button> */}
      {users.length > 0 ? (
        <div className="TableContainer">
          <table className="TableList" cellPadding={10}>
            <thead
              style={{
                backgroundColor: "#1b2430",

                color: "white",
                height: "5vh",
              }}
            >
              <tr>
                <th>NAME</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Description</th>
                <th>Category</th>
                <th>Supply</th>
                <th colSpan={4}>Action</th>
              </tr>
            </thead>

            <tbody align="center">
              {users.map((ele, index) => {
                return (
                  <tr>
                    <td>{ele.name}</td>
                    <td>{ele.price}€</td>
                    <td>{ele.rating}</td>
                    <td>{ele.description}</td>
                    <td>{ele.category}</td>
                    <td>{ele.supply}</td>
                    <td className="BtnContainer">
                      <Link to={`/userdetails/${ele._id}`}>
                        <TbListDetails className=" icons lists" />
                      </Link>
                      <Link to={`/updateuser/${ele._id}`}>
                        <BiEditAlt className=" icons edit" />
                      </Link>

                      <AiTwotoneDelete
                        className="icons delete"
                        onClick={() => {
                          deleteData(ele._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          style={{ marginTop: "100px", textAlign: "center", color: "red" }}
        ></div>
      )}
    </div>
  );
}

export default Users;
