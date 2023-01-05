import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Payment from "../Payment/Payment";
import Homepage from "../Pages/Homepage/Homepage";
// import SignupFormSucess from "./SignupFormSucess";

const Login = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <Homepage />}
    </div>
  );
};

export default Login;
