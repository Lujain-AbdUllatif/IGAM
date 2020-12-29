import React, { useRef } from "react";
import SearchLocal from "../components/SearchLocal";
import { UserIcon, AgentsIcon } from "../icons";
import { AddBtn } from "../components/customBtn";
import RouteCard from "../components/RouteCard";
import AgentForm from "../components/AgentForm";
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
  const formRef = useRef();
  const handleAddClick = (event) => {
    formRef.current.classList.toggle("agent-form-show");
    console.log("add agent clicked");
    console.log(formRef.current);
  };
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
      <AgentForm formRef={formRef} />
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
