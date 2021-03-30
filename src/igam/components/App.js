import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AdminRoutePage from "../pages/AdminRoutePage";
import AgentRoutePage from "../pages/AgentRoutePage";

export default function App() {
  const [routePage, setRoutePage] = useState("login");
  return (
    <div className="page">
      {/* {routePage === "login" ? (
        <LoginPage handleSignIn={setRoutePage} />
      ) : routePage === "admin" ? (
        <AdminRoutePage />
      ) : (
        <AgentRoutePage />
      )} */}
      <AdminRoutePage />
    </div>
  );
}
