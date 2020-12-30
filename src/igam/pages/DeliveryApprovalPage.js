import React from "react";
import { SignatureIcon } from "../icons";

import PageTitle from "../components/PageTitle";
export default function DeliveryApproval() {
  return (
    <div className="main-container">
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

      <button className="delivery-approval-btn" type="submit">
        Submit
      </button>
    </div>
  );
}
