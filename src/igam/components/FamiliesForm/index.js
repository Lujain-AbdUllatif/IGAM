import React from "react";
import "./style.css";
import { LocationsIcon, CloseIcon } from "../../icons";
export default function FamiliesForm(props) {
  return (
    <div ref={props.formRef} className="black-form-container">
      <div className="families-form-container">
        <button
          className="close-form-btn assign-package-close-btn"
          onClick={props.onClose}
        >
          <CloseIcon className="agent-form-colse-icon" />
        </button>
        <form className="families-form">
          <h4>Family-Form</h4>
          <label htmlFor="Name"> Name</label>
          <div className="families-location-icon">
            <input
              type="text"
              name="Name"
              className="families-input-location"
            />
          </div>
          <br></br>

          <label htmlFor="phone no">phone no </label>
          <div className="families-location-icon">
            <input
              type="tel"
              name="phone no"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="families-input-location"
            />
          </div>
          <br></br>

          <label htmlFor="email"> email </label>
          <div className="families-location-icon">
            <input
              type="email"
              name="email"
              className="families-input-location"
            />
          </div>
          <br></br>

          <label htmlFor="location"> location</label>
          <div className="families-location-icon">
            <input
              type="text"
              name="location"
              className="families-input-location"
            />
            <LocationsIcon />
          </div>
          <br></br>

          <label htmlFor="Member">Member </label>
          <div className="families-location-icon">
            <input
              type="Number"
              name="Member"
              className="families-input-location"
            />
          </div>
          <br></br>

          <button className="families-form-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
