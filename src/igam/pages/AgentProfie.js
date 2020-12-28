import React from "react";
// Components
import Profile from "../components/Profile";
import RouteBtn from "../components/RouteBtn";

export default function AgentProfile(props) {
  return (
    <div>
      <Profile
        type="agent"
        name="Radi Fahmi"
        phone="+972 12 345 6789"
        location="VillageX"
      />
    </div>
  );
}
