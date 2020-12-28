import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { HouseIcon, FamilyIcon } from "../icons";
import RouteBtn from "../components/RouteBtn";
import RouteCard from "../components/RouteCard";
const Families = [
  "Family_1",
  "Family_2",
  "Family_3",
  "Family_5",
  "Family_6",
  "Family_7",
  "Family_8",
];

export default function FamiliesPage(props) {
  return (
    <div className="main-container">
      {/* <h2>Families</h2> */}
      <div className="title">
        <h2>
          <FamilyIcon className="card-icon-title qarmede" />
          Families
        </h2>
      </div>
      <SearchLocal />
      <div className="cards-container">
        {Families.map((family) => {
          return (
            <RouteCard title={family} className="white">
              <HouseIcon className="card-icon qarmede" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
