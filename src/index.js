import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./MainComponent.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

const mountPoint = document.createElement('div');
mountPoint.id="#react_component";
document.body.appendChild(mountPoint);

ReactDOM.render(
  <Router>
    <Route exact path="/" component={MainComponent}>
    </Route>
  </Router>,
  mountPoint
);
