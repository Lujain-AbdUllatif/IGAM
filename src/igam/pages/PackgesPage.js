import React from "react";
import { PackgeIcon, AssignIcon, DeliveredIcon, AssignedIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import SubTitleInfo from "../components/SubTitleInfo";
import { AddBtn } from "../components/customBtn";
import SearchLocal from "../components/SearchLocal";
export default function PackgesPage() {
  return (
    <div className="main-container">
      <PageTitle title="Packges">
        <PackgeIcon className="title-icon" />
      </PageTitle>
      <div className="packges-info-control">
        <SubTitleInfo className="blue-igam" />
        <div className="packges-control">
          <form className="add-packges-form">
            <input
              type="number"
              min="1"
              placeholder="packges..."
              className="add-packeges-input"
            />
            <AddBtn className="add-packges-btn" />
          </form>
        </div>
      </div>
      {/* <hr className="horizontal-line" /> */}
      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">Delivered</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
      </div>
    </div>
  );
}
