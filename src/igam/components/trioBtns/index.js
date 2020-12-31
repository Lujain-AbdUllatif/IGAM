import React from "react";
import "./style.css";
import { DeliveredIcon, AssignedIcon, AssignIcon } from "../../icons";
import { useCustomHistory } from "../../custom-hooks/index";
import { CircleBtn } from "../CircleBtn";

export default function TrioBtns(props) {
  const handleFormClick = useCustomHistory("package-form");

  return (
    <div className="trioBtns-container">
      <CircleBtn>
        <DeliveredIcon className="trioBtns-deliveredIcon" />
      </CircleBtn>
      <CircleBtn>
        <AssignedIcon className="trioBtns-assignedIcon" />
      </CircleBtn>
      <CircleBtn onClick={props.onClick_3}>
        <AssignIcon className="trioBtns-assignIcon" />
      </CircleBtn>
    </div>
  );
}
