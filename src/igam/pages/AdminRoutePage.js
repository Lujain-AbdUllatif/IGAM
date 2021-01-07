import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//PAGES
import HeadSection from "../components/HeadSection";
import HomePage from "./HomePage";
import StockPage from "./StockPage";
import PackgesPage from "./PackgesPage";
import LocationsPage from "./LocationsPage";
import LoginPage from "./LoginPage";
import FamiliesPage from "./FamiliesPage";
import AgentsPage from "./AgentsPage";
import AgentProfile from "./AgentProfile";
import FamilyProfile from "./FamilyProfile";
import AgentHomePage from "./AgentHomePage";
import DeliveryApprovalPage from "./DeliveryApprovalPage";
import MoneyPage from "./MoneyPage";

export default function AdminRoutePage() {
  return (
    <div className="page">
      <Router>
        <HeadSection adminRoute={true} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/stock" component={StockPage} />
          <Route exact path="/villages" component={LocationsPage} />
          <Route exact path="/families" component={FamiliesPage} />
          <Route exact path="/agents" component={AgentsPage} />
          <Route exact path="/packges" component={PackgesPage} />
          <Route exact path="/agent-profile" component={AgentProfile} />
          <Route exact path="/family-profile" component={FamilyProfile} />
          <Route exact path="/money" component={MoneyPage} />
          <Route exact path="/agent-home" component={AgentHomePage} />
        </Switch>
      </Router>
    </div>
  );
}
