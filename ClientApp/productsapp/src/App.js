import "./App.css";
import Users from "./Component/Users/Users";
import NewUser from "./Component/Users/NewUser";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import UserDetails from "./Component/Users/UserDetails";
import UpdateUser from "./Component/Users/Userupdate";
import Cart from "./Component/Pages/cart/Cart";
import Shoppage from "./Component/Pages/Shoppage/Shop-page";
import CheckOut from "./Component/Checkout/Checkout";
import Main from "./Component/Homepage/Homepage";
import Login from "./Component/Login/Login";

import SingleProduct from "./Component/Products/SingleProduct";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div style={{ textAlign: "center", color: "red" }}>
              <Main />
            </div>
          }
        />

        <Route path="/shoppage" element={<Shoppage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/payment" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
