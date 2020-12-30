import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { VillageIcon, LocationsIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import { useCustomHistory } from "../custom-hooks";
import { useHistory } from "react-router-dom";

const villages = [
  "Village_1",
  "Village_2",
  "Village_3",
  "Village_5",
  "Village_6",
  "Village_7",
  "Village_8",
];

export default function LocationPage(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/families");
  };

  const handleAddClick = useCustomHistory("location-form");
  return (
    <div className="main-container">
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <LocationsIcon className="card-icon-title blue" />
            Locations
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleAddClick} />
      </div>

      {/* <h2>Locations</h2> */}
      <SearchLocal />
      <div className="cards-container">
        {villages.map((village) => {
          return (
            <RouteCard title={village} className="white" onClick={handleClick}>
              <VillageIcon className="card-icon orange" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
