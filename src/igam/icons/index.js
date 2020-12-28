import React from "react";
import { IconContext } from "react-icons";
import {
  FaConnectdevelop,
  FaUserAlt,
  FaKey,
  FaSignInAlt,
  FaSignOutAlt,
  FaBox,
  FaCoins,
  FaWindowClose,
  FaMapMarkedAlt,
  FaHome,
  FaQuestionCircle,
  FaCheckCircle,
  FaUsers,
  FaSearch,
  FaPlusCircle,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import {
  MdLocationOn,
  MdAssignment,
  MdAssignmentTurnedIn,
  MdAssignmentLate,
} from "react-icons/md";
import { GiFamilyHouse, GiVillage } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import { BsPlusCircleFill } from "react-icons/bs";

export function AssignedIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdAssignmentLate />
    </IconContext.Provider>
  );
}

export function DeliveredIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdAssignmentTurnedIn />
    </IconContext.Provider>
  );
}
export function AssignIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdAssignment />
    </IconContext.Provider>
  );
}
export function SearchIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaSearch />
    </IconContext.Provider>
  );
}

export function AgentsIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaUsers />
    </IconContext.Provider>
  );
}

export function VillageIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiVillage />
    </IconContext.Provider>
  );
}
export function StockIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <AiOutlineStock />
    </IconContext.Provider>
  );
}
export function CheckIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaCheckCircle />
    </IconContext.Provider>
  );
}

export function QuestionIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaQuestionCircle />
    </IconContext.Provider>
  );
}

export function LocationsIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaMapMarkedAlt />
    </IconContext.Provider>
  );
}

export function CloseIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaWindowClose />
    </IconContext.Provider>
  );
}

export function FamilyIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiFamilyHouse />
    </IconContext.Provider>
  );
}

export function LocationIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdLocationOn />
    </IconContext.Provider>
  );
}

export function HomeIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaHome />
    </IconContext.Provider>
  );
}
export function LogoIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaConnectdevelop />
    </IconContext.Provider>
  );
}

export function AddIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <BsPlusCircleFill />
    </IconContext.Provider>
  );
}

export function UserIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaUserAlt />
    </IconContext.Provider>
  );
}

export function KeyIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaKey />
    </IconContext.Provider>
  );
}

export function SignInIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaSignInAlt />
    </IconContext.Provider>
  );
}

export function SignOutIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaSignOutAlt />
    </IconContext.Provider>
  );
}

export function HamburgerIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <ImMenu />
    </IconContext.Provider>
  );
}

export function PackgeIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaBox />
    </IconContext.Provider>
  );
}

export function MoneyIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaCoins />
    </IconContext.Provider>
  );
}

export function PhoneIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdPhone />
    </IconContext.Provider>
  );
}

export function AssignIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <MdAssignment />
    </IconContext.Provider>
  );
}
