import React from "react";
import { LogoIcon } from "../../icons";
import "./style.css";
export default function Logo(props) {
  return (
    <div
      className={
        props.container_className ? props.container_className : "logo-container"
      }
    >
      <LogoIcon className="logo-icon" />
      <h1 className={props.className ? props.className : "logo-title"}>IGAM</h1>
    </div>
  );
}
