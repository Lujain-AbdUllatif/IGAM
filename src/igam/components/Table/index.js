import React from "react";
import TableDataRow from "../TableDataRow";
import "./style.css";

export default function Table(props) {
  return (
    <div className="packges-details">
      <div className="packges-details-head">
        {props.table_titles.map((title) => {
          return (
            <h5
              className={
                props.className ? props.className : "packge-detail-title"
              }
            >
              {title}
            </h5>
          );
        })}
        <h6>&nbsp;&nbsp;&nbsp;</h6>
      </div>
      {props.children}
    </div>
  );
}
