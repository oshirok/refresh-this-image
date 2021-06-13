import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./MainComponent.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

const domContainer = document.querySelector("#react_component");

ReactDOM.render(
  <Router>
    <Route exact path="/" component={MainComponent}>
    </Route>
  </Router>,
  domContainer
);
