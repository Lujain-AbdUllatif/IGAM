import React from "react";
import "./style.css";
import { DeliveredIcon, AssignedIcon, AssignIcon } from "../../icons";

export default function TrioBtns(props) {
  return (
    <div className="trioBtns-container">
      <span>
        <DeliveredIcon className="trioBtns-deliveredIcon" />
      </span>
      <span>
        <AssignedIcon className="trioBtns-assignedIcon" />
      </span>
      <span>
        <AssignIcon className="trioBtns-assignIcon" />
      </span>
    </div>
  );
}
