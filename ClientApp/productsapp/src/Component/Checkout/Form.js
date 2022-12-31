import { useState } from "react";
import Payment from "../Payment/Payment";
import CheckOut from "./Checkout";
import CheckValidation from "./CheckValidation";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? <CheckValidation props={submitForm} /> : <Payment />}
    </div>
  );
};
export default Form;
