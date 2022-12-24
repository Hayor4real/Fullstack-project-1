import { useEffect, useState } from "react";

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

  const latestData = () => {
    getData();
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Users Informations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        quas facere, rem, at nesciunt soluta, commodi cumque quaerat provident
        quam minus ipsa ab doloribus mollitia repellat laboriosam totam animi
        maxime sequi nemo adipisci corrupti dolor. Soluta totam numquam a est
        exercitationem quasi similique, ullam ut tenetur laborum modi delectus,
        temporibus nulla at perferendis deserunt eligendi unde amet ipsum
        repellendus. Sit sunt adipisci beatae aperiam iusto architecto tenetur
        eligendi voluptatem doloremque nostrum. Ea fugiat molestias ullam, sint
        consequatur accusamus qui atque voluptatibus tempora quod quidem magnam
        aliquam ducimus ipsam blanditiis aliquid possimus suscipit quia
        excepturi temporibus cupiditate. Porro saepe aliquam est, vitae quasi
        laborum velit quas distinctio nihil eveniet voluptas similique
        reprehenderit hic, voluptatibus beatae amet soluta in at dolores
        numquam, corrupti repellendus ullam harum incidunt! Excepturi
        consectetur accusantium eveniet quae, dolorem molestias atque dicta
        consequuntur autem dolores mollitia porro eos! Animi dolorum eveniet
        tempora enim dolores earum odit sint velit, obcaecati, totam error
        fugiat cum pariatur labore perspiciatis dolorem dolore laborum sequi
        porro corrupti nobis perferendis nemo blanditiis! Velit inventore
        assumenda a laborum quo voluptatem iure minima magnam, totam labore
        aliquam, architecto corporis aperiam temporibus dicta asperiores
        cupiditate! Ratione fugit nam omnis, commodi laudantium quia ea fugiat
        dolorum nulla eveniet.
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
                    <button>Details</button>
                  </td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
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
