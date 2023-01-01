import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Payment from "../Payment/Payment";
import SignupFormSucess from "./SignupFormSucess";

const Login = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <Payment />}
    </div>
  );
};

export default Login;
