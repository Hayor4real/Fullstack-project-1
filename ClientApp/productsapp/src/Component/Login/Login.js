import { useContext } from "react";
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import { Cartcontext } from "../../context/Context";

import Homepage from "../Pages/Shoppage/Shop-page";
import SignupFormSucess from "./SignupFormSucess";

const Login = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
    alert("Payment Successful");
    dispatch({ type: "REMOVE ALL ITEMS" });
    window.location.replace("/");
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupFormSucess />
      )}
    </div>
  );
};

export default Login;
