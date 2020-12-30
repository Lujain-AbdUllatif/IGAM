import React from "react";
import { CloseIcon } from "../../icons";
import "./style.css";
export default function AgentForm(props) {
  return (
    <div className="agent-form-container">
      <form className="agent-form">
        <h4 className="agent-form-title">Agent-Form</h4>
        {/* <button className="close-form-btn">
          <CloseIcon className="agent-form-colse-icon" />
        </button> */}
        <div className="agent-form-input-container">
          <label htmlFor="agent_name">Name</label>
          <input type="text" id="agent_name" name="name" />
        </div>
        <div className="agent-form-input-container">
          <label htmlFor="agent_phone">Phone</label>
          <input type="tel" id="agent_phone" name="phone" />
        </div>

        <div className="agent-form-input-container">
          <label htmlFor="agent_email">Email</label>
          <input type="email" id="agent_email" name="email" />
        </div>

        <div className="agent-form-input-container">
          <label htmlFor="agent_location">Village</label>
          <input type="location" id="agent_location" name="location" />
        </div>
        <div className="agent-form-submit-btn-container">
          <button type="submit" className="agent-form-submit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
