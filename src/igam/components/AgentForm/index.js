import React from "react";
import { CloseIcon } from "../../icons";
import "./style.css";
import { handleFormDisplay } from "../../utils";
export default function AgentForm(props) {
  const handleCloseClick = handleFormDisplay(
    props.formRef,
    "black-form-container-show"
  );
  return (
    <div ref={props.formRef} className="black-form-container">
      <div className="agent-form-container">
        <button className="close-form-btn" onClick={handleCloseClick}>
          <CloseIcon className="agent-form-colse-icon" />
        </button>
        <form className="agent-form">
          <h4 className="agent-form-title">Agent-Form</h4>

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
    </div>
  );
}
