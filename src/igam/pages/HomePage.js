import React from "react";
import "./style.css";
import { StockIcon, VillageIcon, AgentsIcon } from "../icons";
import HeadSection from "../components/HeadSection";
import RouteBtn from "../components/RouteBtn";

export default function HomePage() {
  return (
    <div className="main-container content-page-position">
      <RouteBtn title="Stock">
        <StockIcon className="route-icon" />
      </RouteBtn>
      <RouteBtn title="Villages">
        <VillageIcon className="route-icon" />
      </RouteBtn>
      <RouteBtn title="Agents">
        <AgentsIcon className="route-icon" />
      </RouteBtn>
    </div>
  );
}
