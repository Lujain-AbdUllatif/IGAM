import React from "react";
import "./style.css";
import { LocationsIcon } from "../../icons";
export default function FamiliesForm(props) {
  return (
    <div className="families-form-container">
      <h1>FamiliesForm</h1>
      <form className="families-form">
        <label htmlFor="Name"> Name:</label>
        <br></br>
        <input type="text" name="Name" placeholder="Name ....." />
        <br></br>
        <label for="phone number">phone number: </label>
        <br></br>
        <input
          type="tel"
          name="phone number"
          placeholder="phone number ....."
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <br></br>
        <label for="email"> email: </label>
        <br></br>
        <input type="email" name="email" placeholder="email ....." />
        <br></br>
        <label For="location"> location:</label>
        <br></br>

        <input
          type="text"
          name="location"
          className="form-input-location"
          placeholder="location ....."
        />
        <LocationsIcon />

        <br></br>
        <label for="Number">Number: </label>
        <br></br>
        <input type="number" name="Number" placeholder="Number ....." />
        <br></br>
        <button className="families-form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
