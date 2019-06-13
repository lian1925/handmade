import * as React from "react";
import * as ReactDom from 'react-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Home from "./home"
import About from "./about"
ReactDom.render(
  <div>
    <h1 style={{ textAlign: "center" }}>纯手工系列 <span style={{ fontSize: 14, color: "#666" }}>以最朴素方式写前端</span></h1>
    <div>
      <Router>

        <Route path="/" exact component={Home}></Route>

        <Route path="/about" component={About}></Route>
      </Router>
    </div>

  </div>, document.getElementById("root")
)