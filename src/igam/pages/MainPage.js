import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//PAGES
import HeadSection from "../components/HeadSection";
import HomePage from "../pages/HomePage";
import StockPage from "../pages/StockPage";
import PackgesPage from "../pages/PackgesPage";
import LocationsPage from "../pages/LocationsPage";
import LoginPage from "../pages/LoginPage";
import FamiliesPage from "./FamiliesPage";
import AgentsPage from "./AgentsPage";
import AgentProfile from "../pages/AgentProfile";
import FamilyProfile from "../pages/FamilyProfile";
import AssignPackageForm from "../pages/AssignPackageForm";

export default function MainPage() {
  return (
    <div className="page">
      <Router>
        <HeadSection />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/stock" component={StockPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route exact path="/families" component={FamiliesPage} />
          <Route exact path="/agents" component={AgentsPage} />
          <Route exact path="/packges" component={PackgesPage} />
          <Route exact path="/agent/profile" component={AgentProfile} />
          <Route exact path="/family/profile" component={FamilyProfile} />
          <Route
            exact
            path="/assign-package-form"
            component={AssignPackageForm}
          />
        </Switch>
      </Router>
    </div>
  );
}
