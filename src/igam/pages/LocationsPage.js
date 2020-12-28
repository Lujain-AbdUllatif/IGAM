import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { VillageIcon, LocationsIcon } from "../icons";
import RouteBtn from "../components/RouteBtn";
import RouteCard from "../components/RouteCard";
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
  const [SearchLocation, setSearchLocation] = useState("");

  return (
    <div className="main-container">
      <div className="title">
        <h2>
          <LocationsIcon className="card-icon-title blue" />
          Locations
        </h2>
      </div>
      {/* <h2>Locations</h2> */}
      <SearchLocal />
      <div className="cards-container">
        {villages.map((village) => {
          return (
            <RouteCard title={village} className="white">
              <VillageIcon className="card-icon orange" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
