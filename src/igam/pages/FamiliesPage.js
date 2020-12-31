import React, { useState } from "react";
import SearchLocal from "../components/SearchLocal";
import { HouseIcon, FamilyIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import FamiliesForm from "../components/FamiliesForm";
import { useCustomHistory, useFormRef } from "../custom-hooks";

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
  const handleRouteCardClick = useCustomHistory("/family-profile");
  // const handleAddClick = useCustomHistory("/family-form");
  const [formRef, handleFormDisplay] = useFormRef();
  return (
    <div className="main-container">
      <FamiliesForm formRef={formRef} onClose={handleFormDisplay} />
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <FamilyIcon className="card-icon-title qarmede" />
            Families
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleFormDisplay} />
      </div>

      <SearchLocal />
      <div className="cards-container">
        {Families.map((family) => {
          return (
            <RouteCard
              title={family}
              className="white"
              onClick={handleRouteCardClick}
            >
              <HouseIcon className="card-icon qarmede" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
