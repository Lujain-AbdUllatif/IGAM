import React, { useRef } from "react";
import "./style.css";
import Logo from "../Logo";
import { HamburgerIcon } from "../../icons";
import Navbar from "../../components/Navbar";
export default function HeadSection() {
  const ref = useRef();
  const handleDisplayNav = (event) => {
    console.log(ref.current);
    ref.current.classList.toggle("admin-nav-display");
  };
  return (
    <div className="head-container">
      <div className="head-section">
        <Logo />
        <button className="nav-btn" onClick={handleDisplayNav}>
          <HamburgerIcon className="ham-icon" />
        </button>
      </div>
      <Navbar navRef={ref} />
    </div>
  );
}
