import React from "react";
import "./style.css";
import { DeliveredIcon, AssignedIcon, AssignIcon } from "../../icons";
import { useHistory } from "react-router-dom";

export default function TrioBtns(props) {
  const history = useHistory();

  const handleFormClick = (e) => {
    history.push("/package-form");
  };

  return (
    <div className="trioBtns-container">
      <button>
        <DeliveredIcon className="trioBtns-deliveredIcon" />
      </button>
      <button>
        <AssignedIcon className="trioBtns-assignedIcon" />
      </button>
      <button onClick={props.onClick_3}>
        <AssignIcon className="trioBtns-assignIcon" />
      </button>
    </div>
  );
}
