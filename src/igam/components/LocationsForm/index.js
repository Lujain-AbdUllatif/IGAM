import React from "react";
import "./style.css";
import { LocationsIcon } from "../../icons";
export default function LocationsForm(props) {
  return (
    <div className="locaions-form-container">
      <h1>LocaionForm</h1>
      <form className="locations-form">
        <label htmlFor="Name"> location name</label>
        <div className="locations-icon">
          <input
            type="text"
            name="location name"
            className="locations-input-location"
            placeholder="location name ....."
          />
        </div>
        <br></br>

        <label htmlFor="Name"> location </label>
        <div className="locations-icon">
          <input
            type="text"
            name="location"
            className="locations-input-location"
            placeholder="location ....."
          />
          <LocationsIcon />
        </div>
        <br></br>

        <button className="locations-form-btn" type="submit">
          Add Location
        </button>
      </form>
    </div>
  );
}
