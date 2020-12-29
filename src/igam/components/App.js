import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

export default function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
