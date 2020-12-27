import React from "react";
import HeadSection from "../components/HeadSection";
import HomePage from "../pages/HomePage";
import StockPage from "../pages/StockPage";
import PackgesPage from "../pages/PackgesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
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
        </Switch>
      </Router>
    </div>
  );
}
