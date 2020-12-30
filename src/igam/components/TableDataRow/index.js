import React from "react";
import "./style.css";
import { EyeIcon } from "../../icons";

export default function TableDataRow(props) {
  const [eyeClick, setEyeClick] = React.useState(false);

  const handleEyeClick = () => {
    setEyeClick(!eyeClick);
    console.log(eyeClick);
  };

  // props.row_data.push(<EyeIcon />);

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
        <h6 onClick={handleEyeClick}>
          <EyeIcon />
        </h6>
      </div>
      {eyeClick && <div className="packge-card-details">DETAILS</div>}
    </div>
  );
}
