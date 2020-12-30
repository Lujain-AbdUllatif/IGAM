import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//PAGES
import HeadSection from "../components/HeadSection";
import HomePage from "../pages/HomePage";
import StockPage from "../pages/StockPage";
import PackgesPage from "../pages/PackgesPage";
import LocationsPage from "../pages/LocationsPage";
import LoginPage from "../pages/LoginPage";
import Delivered from "../components/Delivered";
import Assign from "../components/Assign";
import FamiliesPage from "./FamiliesPage";
import AgentsPage from "./AgentsPage";
import AgentProfile from "../pages/AgentProfile";
import FamilyProfile from "../pages/FamilyProfile";
import FamiliesFormPage from "../pages/FamiliesFormPage";
import LocationsFormPage from "../pages/LocationsFormPage";
import AssignPackageForm from "../pages/AssignPackageForm";
import AgentFormPage from "./AgentFormPage";

export default function MainPage() {
  return (
    <div className="page">
      <Router>
        <HeadSection />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/stock" component={StockPage} />
          <Route exact path="/villages" component={LocationsPage} />
          <Route exact path="/families" component={FamiliesPage} />
          <Route exact path="/agents" component={AgentsPage} />
          <Route exact path="/packges" component={PackgesPage} />
          <Route exact path="/assign" component={Assign} />
          <Route exact path="/Delivered" component={Delivered} />
          <Route exact path="/agent-profile" component={AgentProfile} />
          <Route exact path="/family-profile" component={FamilyProfile} />
          <Route exact path="/family-form" component={FamiliesFormPage} />
          <Route exact path="/location-form" component={LocationsFormPage} />
          <Route exact path="/package-form" component={AssignPackageForm} />
          <Route exact path="/agent-form" component={AgentFormPage} />
        </Switch>
      </Router>
    </div>
  );
}
