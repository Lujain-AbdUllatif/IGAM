import React from "react";
import "./style.css";
export default function PageTitle(props) {
  return (
    <div className={`page-title ${props.className}`}>
      {props.children}
      <h1>{props.title}</h1>
    </div>
  );
}
