import React from "react";
import { LogoIcon } from "../../icons";
import "./style.css";
export default function Logo() {
  return (
    <div className="logo-container">
      <LogoIcon className="logo-icon" />
      <h1 className="logo-title">IGAM</h1>
    </div>
  );
}
