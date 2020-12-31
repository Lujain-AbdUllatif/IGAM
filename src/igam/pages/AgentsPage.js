import React, { useRef } from "react";
import SearchLocal from "../components/SearchLocal";
import { UserIcon, AgentsIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import { useCustomHistory, useFormRef } from "../custom-hooks";
import AgentForm from "../components/AgentForm";
import { handleFormDisplay } from "../utils";

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

  // const handleAddClick = useCustomHistory("/agent-form");

  const [formRef, handleFormDisplay] = useFormRef();

  return (
    <div className="main-container">
      <AgentForm formRef={formRef} onClose={handleFormDisplay}/>
      <div className="cards-page-head">
        <div className="title">
          <h2>
            <AgentsIcon className="card-icon-title blue" />
            Agents
          </h2>
        </div>
        <AddBtn className="cards-page-add-btn" onClick={handleFormDisplay} />
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
