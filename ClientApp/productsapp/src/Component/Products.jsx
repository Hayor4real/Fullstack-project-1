import { useEffect, useState } from "react";
import { baseUrl } from "../Utility/contant";

function Products() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}productdb`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setState(data.results);
      });
  }, []);
  return (
    <div>
      <h2>Product Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat
        laborum corrupti voluptatibus provident rerum repellendus commodi at
        perferendis velit, porro consectetur maxime sapiente ut hic in quo qui
        accusantium esse aspernatur reprehenderit unde aperiam. Maxime commodi
        error rerum neque voluptatum totam mollitia veritatis? Libero ducimus
        qui odit debitis velit atque ex reprehenderit sint aut. Dicta optio
        beatae culpa esse reprehenderit quia ducimus. Veritatis ducimus atque
        tempore nobis pariatur doloribus voluptate asperiores ratione totam
        voluptates nisi vitae dolore ex quia eius quos voluptatem tenetur
        explicabo ad recusandae voluptas, alias adipisci? Amet odit nihil facere
        est velit provident ab quo non?
      </p>
      <ol>
        {state.length > 0 ? (
          state.map((ele, index) => {
            return <li key={index + 1}>{ele.pname}</li>;
          })
        ) : (
          <li>No Data</li>
        )}
      </ol>
    </div>
  );
}

export default Products;
