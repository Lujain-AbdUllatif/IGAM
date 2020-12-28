import React from "react";
// Components
import Profile from "../components/Profile";
import TrioBtns from "../components/trioBtns";

export default function AgentProfile(props) {
  return (
    <div>
      <Profile
        type="agent"
        name="Radi Fahmi"
        phone="+972 12 345 6789"
        location="VillageX"
      />
      <TrioBtns />
    </div>
  );
}
