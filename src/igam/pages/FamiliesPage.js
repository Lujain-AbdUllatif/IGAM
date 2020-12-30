import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { HouseIcon, FamilyIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import { useCustomHistory } from "../custom-hooks";
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
  const handleAddClick = useCustomHistory("/family-form");
  return (
    <div className="main-container">
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <FamilyIcon className="card-icon-title qarmede" />
            Families
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleAddClick} />
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
