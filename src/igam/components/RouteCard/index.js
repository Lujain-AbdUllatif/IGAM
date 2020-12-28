import React from "react";
import "./style.css";
export default function RouteCard(props) {
  return (
    <div className="card">
      {props.children}
      <h3 className={props.className}>{props.title}</h3>
    </div>
  );
}
