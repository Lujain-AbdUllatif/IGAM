import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function RouteBtn(props) {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/${props.title.toLowerCase()}`);
  };
  return (
    <button
      className={props.className ? props.className : "route-btn"}
      onClick={handleClick}
    >
      <h1 className="route-title">{props.title}</h1>
      <div className="icon-container">{props.children}</div>
    </button>
  );
}
