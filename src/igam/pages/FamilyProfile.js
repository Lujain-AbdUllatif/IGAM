import React from "react";
// Components
import Profile from "../components/Profile";
import TrioBtns from "../components/trioBtns";

export default function FamilyProfile(props) {
  return (
    <div>
      <Profile
        type="family"
        name="Hasan Hasanien"
        phone="+972 98 765 4321"
        location="VillageY"
      />
      <TrioBtns />
    </div>
  );
}
