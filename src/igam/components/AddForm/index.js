import React from "react";
import { AddBtn } from "../customBtn";
import { useForm } from "../../custom-hooks/useForm";
import "./style.css";
export default function AddForm(props) {
  const [values, handleChange] = useForm({ input: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAdd(values.input);
    values.input = "";
  };
  return (
    <div className="add-form-control">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="input"
          value={values.input}
          min="0"
          placeholder={props.placeholder}
          className="add-form-input"
          onChange={handleChange}
        />
        <AddBtn className="add-form-btn" />
      </form>
    </div>
  );
}
