import React, { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return [values, handleChange];
}
