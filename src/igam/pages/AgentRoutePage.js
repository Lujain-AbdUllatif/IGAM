import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeadSection from "../components/HeadSection";
import AgentHomePage from "../pages/AgentHomePage";
import DeliveryApprovalPage from "../pages/DeliveryApprovalPage";
export default function AgentRoutePage() {
  return (
    <div className="page">
      <Router>
        <HeadSection adminRoute={false} />
        <Switch>
          <Route exact path="/" component={AgentHomePage} />
          <Route
            exact
            path="/delivery-approval"
            component={DeliveryApprovalPage}
          />
        </Switch>
      </Router>
    </div>
  );
}
