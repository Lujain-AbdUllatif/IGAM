import React from "react";
import SearchLocal from "../components/SearchLocal";
import { UserIcon, AgentsIcon } from "../icons";
import RouteBtn from "../components/RouteBtn";
import RouteCard from "../components/RouteCard";
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
  return (
    <div className="main-container">
      <div className="title">
        <h2>
          <AgentsIcon className="card-icon-title blue" />
          Agents
        </h2>
      </div>

      <SearchLocal />
      <div className="cards-container">
        {Agents.map((agent) => {
          return (
            <RouteCard title={agent} className="yellow">
              <UserIcon className="card-icon  yellow" />
            </RouteCard>
          );
        })}
      </div>
    </div>
  );
}
