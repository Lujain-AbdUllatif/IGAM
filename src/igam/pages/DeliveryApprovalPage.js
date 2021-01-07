import React from "react";
import { SignatureIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import DeliveryMessage from "../components/DeliveryMessage.js";
import { useFormRef } from "../custom-hooks";
import { useCustomHistory } from "../custom-hooks";
export default function DeliveryApproval() {
  const [messageRef, handleMessageDisplay] = useFormRef();
  const gotoAgentHome = useCustomHistory("/");
  const closeMessage = (event) => {
    handleMessageDisplay(event);
    gotoAgentHome();
  };
  return (
    <div className="main-container">
      <DeliveryMessage formRef={messageRef} onClose={closeMessage} />
      <div className="delivery-approval-header">
        <PageTitle title="Delivery Approval">
          <SignatureIcon className="title-icon" />
        </PageTitle>
      </div>
      <div className="delivery-approval-details">
        <p>Package No: 12366</p>
        <p>Location:loc_1</p>
        <p>Family: fa_1</p>
      </div>

      <div className="delivery-approval-Code">
        <div className="agent-code">
          <label>Agent Code</label>
          <input type="code" name="Nnmber" />
        </div>

        <div className="family-code">
          <label>Family Code</label>
          <input type="code" name="Mumber" />
        </div>
      </div>

      <button
        className="delivery-approval-btn"
        type="submit"
        onClick={handleMessageDisplay}
      >
        Submit
      </button>
    </div>
  );
}
