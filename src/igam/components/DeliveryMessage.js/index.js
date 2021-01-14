import React from "react";
import { CloseIcon, CheckIcon } from "../../icons";
import "./style.css";
export default function DeliveryMessage(props) {
  return (
    <div ref={props.formRef} className="black-form-container">
      <div className="agent-form-container">
        <button className="close-form-btn" onClick={props.onClose}>
          <CloseIcon className="agent-form-colse-icon" />
        </button>
        <div className="success-message-container">
          <CheckIcon className="success-icon" />
          <h3>Succesfully Submitted</h3>
        </div>
      </div>
    </div>
  );
}
