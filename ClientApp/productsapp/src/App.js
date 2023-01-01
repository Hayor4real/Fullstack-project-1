// import Products from "./Component/Products";
import "./App.css";
import Users from "./Component/Users/Users";
import NewUser from "./Component/Users/NewUser";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import UserDetails from "./Component/Users/UserDetails";
import UpdateUser from "./Component/Users/Userupdate";
import Cart from "./Component/Pages/cart/Cart";
import Payment from "./Component/Payment/Payment";
import Homepage from "./Component/Pages/Homepage/Homepage";
import CheckOut from "./Component/Checkout/Checkout";
import Main from "./Component/About/Main";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}
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
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
