import React from "react";
import "./style.css";
import {
  UserIcon,
  PhoneIcon,
  LocationIcon,
  EditIcon,
  HomeIcon,
} from "../../icons";

export default function Profile(props) {
  return (
    <div class="profile-container">
      <button className="edit-agent-btn" onClick={props.onEdit}>
        <EditIcon className="edit-icon" />
      </button>

      {/* Header */}
      <div className="profile-header">
        <span class="circle">
          {props.type === "agent" ? (
            <UserIcon className="agent-icon" />
          ) : (
            <HomeIcon className="home-icon" />
          )}
        </span>
        <span id="name">&nbsp;{props.name}</span>
      </div>
      {/* Details */}
      <div className="profile-details">
        <span id="phone">
          <PhoneIcon />
          &nbsp;{props.phone}
        </span>
        <span id="location">
          <LocationIcon className="location-icon" />
          &nbsp;{props.location}
        </span>
      </div>
    </div>
  );
}
