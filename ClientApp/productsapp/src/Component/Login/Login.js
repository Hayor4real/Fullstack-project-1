import React, { useState } from "react";
import SignupForm from "./SignupForm";

import Homepage from "../Pages/Homepage/Homepage";
import SignupFormSucess from "./SignupFormSucess";

const Login = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
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
