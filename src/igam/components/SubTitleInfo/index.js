import React from "react";
import "./style.css";
export default function SubTitleInfon(props) {
  return (
    <h3 className={props.className}>
      {props.text}
      <span> {props.value}</span>
    </h3>
  );
}

//Avialable Packges
