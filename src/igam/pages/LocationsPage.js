import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { VillageIcon, LocationsIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import LocationForm from "../components/LocationsForm";
import { useCustomHistory, useFormRef } from "../custom-hooks";

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
  const handleRouteCardClick = useCustomHistory("/families");

  // const handleAddClick = useCustomHistory("location-form");
  const [formRef, handleFormDisplay] = useFormRef();
  return (
    <div className="main-container">
      <LocationForm formRef={formRef} onClose={handleFormDisplay} />
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <LocationsIcon className="card-icon-title blue" />
            Locations
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleFormDisplay} />
      </div>

      {/* <h2>Locations</h2> */}
      <SearchLocal />
      <div className="cards-container">
        {villages.map((village) => {
          return (
            <RouteCard
              title={village}
              className="white"
              onClick={handleRouteCardClick}
            >
              <VillageIcon className="card-icon orange" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
