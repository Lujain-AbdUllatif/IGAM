import React from "react";
import "./style.css";
import { EyeIcon, DeliverIcon } from "../../icons";
import { CircleBtn } from "../CircleBtn";
import { useCustomHistory } from "../../custom-hooks";

export default function TableDataRow(props) {
  const [eyeClick, setEyeClick] = React.useState(false);
  const deliverPackage = useCustomHistory("/delivery-approval");
  const handleEyeClick = () => {
    setEyeClick(!eyeClick);
    console.log(eyeClick);
  };

  return (
    <div className="details-in-table">
      <div className="packge-card">
        {props.row_data.map((cellData) => {
          return (
            <h6
              key={cellData}
              className={
                props.className ? props.className : "packge-detail-title"
              }
            >
              {cellData}
            </h6>
          );
        })}
        {props.agentDisplay ? (
          <CircleBtn className="deliver-btn" onClick={deliverPackage}>
            <DeliverIcon />
          </CircleBtn>
        ) : (
          <></>
        )}

        <h6 onClick={handleEyeClick}>
          <EyeIcon />
        </h6>
      </div>
      {eyeClick && <div className="packge-card-details">DETAILS</div>}
    </div>
  );
}
