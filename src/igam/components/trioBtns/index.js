import React from "react";
import "./style.css";
import { DeliveredIcon, AssignedIcon, AssignIcon } from "../../icons";
import { useCustomHistory } from "../../custom-hooks/index";
import { CircleBtn } from "../CircleBtn";

export default function TrioBtns(props) {
  const handleFormClick = useCustomHistory("package-form");

  return (
    <div className="trioBtns-container">
      <CircleBtn onClick={props.onClick_1}>
        <DeliveredIcon className="trioBtns-deliveredIcon" />
      </CircleBtn>
      <CircleBtn onClick={props.onClick_2}>
        <AssignedIcon className="trioBtns-assignedIcon" />
      </CircleBtn>
      {props.btn_3_display ? (
        <CircleBtn onClick={props.onClick_3}>
          <AssignIcon className="trioBtns-assignIcon" />
        </CircleBtn>
      ) : (
        <div></div>
      )}
    </div>
  );
}
