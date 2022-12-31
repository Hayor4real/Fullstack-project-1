import { useState, useEffect } from "react";
import CheckValidation from "./CheckValidation";

const useForm = (submitForm) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    city: "",
    state: "",
    code: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(CheckValidation(values));
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return { handleChange, handleFormSubmit, errors, values };
};
export default useForm;
