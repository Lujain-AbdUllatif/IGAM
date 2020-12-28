import React from "react";
import { Link } from "react-router-dom";
import { CloseIcon } from "../../icons";
import "./style.css";
export default function NavBar(props) {
  const handleCloseNav = (event) => {
    console.log(props.navRef.current);
    props.navRef.current.classList.toggle("admin-nav-display");
  };
  return (
    <nav className="admin-nav" ref={props.navRef}>
      <ul className="nav-list">
        <li className="nav-list-one-item justify-self-right">
          <button className="nav-close-btn" onClick={handleCloseNav}>
            <CloseIcon className="nav-close-icon" />
          </button>
        </li>
        <hr />
        <li className="nav-list-three-items">
          <Link
            to="/stock"
            className="nav-sub-list-item link"
            onClick={handleCloseNav}
          >
            <h2>Stock</h2>
          </Link>
          <ul className="nav-sub-list">
            <li className="nav-sub-list-item">
              <Link to="/money" className="link" onClick={handleCloseNav}>
                <h3>Money</h3>
              </Link>
            </li>
            <li className="nav-sub-list-item">
              <Link to="/packges" className="link" onClick={handleCloseNav}>
                <h3>Packges</h3>
              </Link>
            </li>
          </ul>
        </li>
        <hr />
        <li className="nav-list-one-item">
          <Link to="/locations" className="link" onClick={handleCloseNav}>
            <h2>Locations</h2>
          </Link>
        </li>
        <hr />
        <li className="nav-list-one-item">
          <Link to="/agents" className="link" onClick={handleCloseNav}>
            <h2>Agents</h2>
          </Link>
        </li>
        <hr />
        <li className="nav-list-one-item">Logout </li>
      </ul>
    </nav>
  );
}
