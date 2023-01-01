import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        quas facere, rem, at nesciunt soluta, commodi cumque quaerat provident
        quam minus ipsa ab doloribus mollitia repellat laboriosam totam animi
        maxime sequi nemo adipisci corrupti dolor. Soluta totam numquam a est
        exercitationem quasi similique, ullam ut tenetur laborum modi delectus,
        temporibus nulla at perferendis deserunt eligendi unde amet ipsum
        repellendus. Sit sunt adipisci beatae aperiam iusto architecto tenetur
        eligendi voluptatem doloremque nostrum. Ea fugiat molestias ullam, sint
      </p>
      {/* <button onClick={latestData}>Users</button> */}
      {users.length > 0 ? (
        <table
          cellPadding={10}
          style={{
            width: "100%",
            margin: "50px auto",
            boxShadow: "0 0 10px green",
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
            <tr>
              <th>NAME</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Category</th>
              <th>Supply</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>

          <tbody align="center">
            {users.map((ele, index) => {
              return (
                <tr style={{ margin: "60px" }}>
                  <td>{ele.name}</td>
                  <td>{ele.price}€</td>
                  <td>{ele.rating}</td>
                  <td>{ele.description}</td>
                  <td>{ele.category}</td>
                  <td>{ele.supply}</td>
                  <td>
                    <Link to={`/userdetails/${ele._id}`}>
                      <button>Details</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/updateuser/${ele._id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteData(ele._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          style={{ marginTop: "100px", textAlign: "center", color: "red" }}
        ></div>
      )}
    </div>
  );
}

export default Users;
