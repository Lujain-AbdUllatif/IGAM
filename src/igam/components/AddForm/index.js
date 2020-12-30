import React from "react";
import { AddBtn } from "../customBtn";
import "./style.css";
export default function AddForm(props) {
  return (
    <div className="add-form-control">
      <form className="add-form">
        <input
          type="number"
          min="1"
          placeholder={props.placeholder}
          className="add-form-input"
        />
        <AddBtn className="add-form-btn" />
      </form>
    </div>
  );
}
