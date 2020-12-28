import React from "react";
import "./style.css";
export default function LogInInput(props) {
  return (
    <div className="angle-border">
      {props.children}
      <input
        name={props.title}
        type={props.type}
        placeholder={props.title}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
