import React from "react";
import "./style.css";
import { LocationsIcon, CloseIcon } from "../../icons";
export default function LocationsForm(props) {
  return (
    <div ref={props.formRef} className="black-form-container">
      <div className="locaions-form-container">
        <button
          type="button"
          className="close-form-btn assign-package-close-btn"
          onClick={props.onClose}
        >
          <CloseIcon className="agent-form-colse-icon" />
        </button>
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
    </div>
  );
}
