import React from "react";
import SearchLocal from "../components/SearchLocal";
import { UserIcon, AgentsIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import { useCustomHistory } from "../custom-hooks";

const Agents = [
  "Agent_1",
  "Agent_2",
  "Agent_3",
  "Agent_4",
  "Agent_5",
  "Agent_6",
  "Agent_7",
  "Agent_8",
];

export default function AgentsPage(props) {
  const handleRouteCardClick = useCustomHistory("/agent-profile");

  const handleAddClick = useCustomHistory("/agent-form");

  return (
    <div className="main-container">
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <AgentsIcon className="card-icon-title blue" />
            Agents
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleAddClick} />
      </div>
      <SearchLocal />
      <div className="cards-container">
        {Agents.map((agent) => {
          return (
            <RouteCard
              title={agent}
              className="yellow"
              onClick={handleRouteCardClick}
            >
              <UserIcon className="card-icon  yellow" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
