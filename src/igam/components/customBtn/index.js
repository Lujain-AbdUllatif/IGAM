import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { AddIcon, FilterIcon } from "../../icons";

export function SmallRouteBtn(props) {
  const history = useHistory();
  const handleClick = (event) => {
    history.push(props.path.toLowerCase());
  };
  return (
    <button className={props.className ? props.className : "small-route-btn"}>
      {props.children}
    </button>
  );
}

export function AddBtn(props) {
  return (
    <button type={props.type} className={props.className}>
      <AddIcon className="add-btn-icon" />
    </button>
  );
}

export function FilterBtn(props) {
  return (
    <button type={props.type} className={props.className}>
      <FilterIcon className="filter-btn-icon" />
    </button>
  );
}
