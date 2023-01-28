import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { baseUrl } from "../../Utility/contant";

import { TbListDetails } from "react-icons/tb";
import "./Users.css";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "name", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");
  const sortByPrice = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.price - userB.price;
      }
      return userB.price - userB.price;
    });
    setUsers(usersCopy);
  };
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.name}`;
      const fullNameB = `${userB.name}`;

      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setUsers(usersCopy);
  };
  const search = (event) => {
    const matchedUsers = users.filter((user) => {
      return `${user.name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`${baseUrl}users/userdata`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  };

  const deleteData = (id) => {
    fetch(`${baseUrl}users/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        getData();
      });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <div>
      <div className="products">
        <h2 style={{ color: "white" }}>Products Informations</h2>
        <p style={{ color: "white" }}>Information about the products</p>
      </div>
      {/* <button onClick={latestData}>Users</button> */}
      {users.length > 0 ? (
        <>
          <div className="TableContainer">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchPhrase}
                onChange={search}
              />
            </div>
            <table className="TableList" cellPadding={10}>
              <thead
                style={{
                  backgroundColor: "#1b2430",

                  color: "white",
                  height: "5vh",
                }}
              >
                <tr>
                  <th onClick={sortByName}>
                    NAME
                    {sorted.sorted === "name" ? renderArrow() : null}
                  </th>
                  <th onClick={sortByPrice}>
                    Price
                    {sorted.sorted === "price" ? renderArrow() : null}
                  </th>
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
                      <td>€{ele.price}</td>
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
        </>
      ) : (
        <div
          style={{ marginTop: "100px", textAlign: "center", color: "red" }}
        ></div>
      )}
    </div>
  );
}

export default Users;
