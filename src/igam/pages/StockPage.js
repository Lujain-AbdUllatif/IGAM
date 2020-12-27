import React from "react";
import { MoneyIcon, PackgeIcon } from "../icons";
import RouteBtn from "../components/RouteBtn";
export default function StockPage() {
  return (
    <div className="main-container">
      <RouteBtn title="Money">
        <MoneyIcon className="route-icon" />
      </RouteBtn>
      <RouteBtn title="Packges">
        <PackgeIcon className="route-icon" />
      </RouteBtn>
    </div>
  );
}
