import React from "react";
import { PackgeIcon, AssignIcon, DeliveredIcon, AssignedIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import SubTitleInfo from "../components/SubTitleInfo";
import { SmallRouteBtn, AddBtn } from "../components/customBtn";
import RouteBtn from "../components/RouteBtn";
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
      <hr className="horizontal-line" />
      <div className="packges-data">
        <div className="packges-head">
          <h2 className="blue-igam">Delivered</h2>
          <div className="packge-routes">
            <SmallRouteBtn
              title="packge"
              path="assign-packge"
              className="packge-route-btn"
            >
              <DeliveredIcon className="assign-packge-btn green-igam" />
            </SmallRouteBtn>
            <SmallRouteBtn
              title="packge"
              path="assign-packge"
              className="packge-route-btn"
            >
              <AssignedIcon className="assign-packge-btn yellow-igam" />
            </SmallRouteBtn>
            <SmallRouteBtn
              title="packge"
              path="assign-packge"
              className="packge-route-btn"
            >
              <AssignIcon className="assign-packge-btn orange-igam" />
            </SmallRouteBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
