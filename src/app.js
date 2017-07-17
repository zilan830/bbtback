import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Template from "./template";
import Activity from "./activity";
import Cases from "./cases";
import Center from "./center";
import Company from "./company";
import Contact from "./contact";
import Home from "./home";
import Product from "./products";
import "normalize.css";
import "./web_modules/style/style.less";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Template>
          <Redirect to="#/home" />
          <Route path="#/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="#/company" component={Company} />
          <Route path="#/activity" component={Activity} />
          <Route path="#/contact" component={Contact} />
          <Route path="#/cases" component={Cases} />
          <Route path="#/center" component={Center} />
        </Template>
      </Router>
    );
  }
}
