import React from "react";
import "./style.css";
import { LocationsIcon } from "../../icons";
export default function LocationsForm(props) {
  return (
    <div className="locaions-form-container">
      <form className="locations-form">
        <h4>Locaion-Form</h4>
        <label htmlFor="Name"> location name</label>
        <div className="locations-icon">
          <input
            type="text"
            name="location name"
            className="locations-input-location"
          />
        </div>
        <br></br>

        <label htmlFor="Name"> location </label>
        <div className="locations-icon">
          <input
            type="text"
            name="location"
            className="locations-input-location"
          />
          <LocationsIcon />
        </div>
        <br></br>

        <button className="locations-form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
