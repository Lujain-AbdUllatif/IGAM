import React from "react";
import "./style.css";
import { LocationsIcon } from "../../icons";
export default function FamiliesForm(props) {
  return (
    <div className="families-form-container">
      <form className="families-form">
        <h2>Family-Form</h2>
        <label htmlFor="Name"> Name</label>
        <div className="families-location-icon">
          <input
            type="text"
            name="Name"
            placeholder="Name ....."
            className="families-input-location"
          />
        </div>
        <br></br>

        <label for="phone no">phone no </label>
        <div className="families-location-icon">
          <input
            type="tel"
            name="phone no"
            placeholder="phone no ....."
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className="families-input-location"
          />
        </div>
        <br></br>

        <label for="email"> email </label>
        <div className="families-location-icon">
          <input
            type="email"
            name="email"
            placeholder="email ....."
            className="families-input-location"
          />
        </div>
        <br></br>

        <label For="location"> location</label>
        <div className="families-location-icon">
          <input
            type="text"
            name="location"
            className="families-input-location"
            placeholder="location ....."
          />
          <LocationsIcon />
        </div>
        <br></br>

        <label for="Member">Member </label>
        <div className="families-location-icon">
          <input
            type="Number"
            name="Member"
            placeholder="member ....."
            className="families-input-location"
          />
        </div>
        <br></br>

        <button className="families-form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
