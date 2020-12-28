import React from "react";
// PAGES
import HeadSection from "../components/HeadSection";
import HomePage from "../pages/HomePage";
import StockPage from "../pages/StockPage";
import PackgesPage from "../pages/PackgesPage";
import LoginPage from "../pages/LoginPage";
import AgentProfile from "../pages/AgentProfie";
import FamilyProfile from "../pages/FamilyProfile";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="page">
      <Router>
        <HeadSection />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/stock" component={StockPage} />
          <Route exact path="/packges" component={PackgesPage} />
          <Route exact path="/agent/profile" component={AgentProfile} />
          <Route exact path="/family/profile" component={FamilyProfile} />
        </Switch>
      </Router>
    </div>
  );
}
