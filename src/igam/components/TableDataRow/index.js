import React from "react";
import "./style.css";
export default function TableDataRow(props) {
  return (
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
    </div>
  );
}
