import React from "react";
import { Router, Route, hashHistory, IndexRedirect } from "react-router";
import Template from "./template";
import Activity from "./activity";
import Cases from "./cases";
import Center from "./center";
import Home from "./home";
import ProductCenter from "./productCenter";
import ProductDetail from "./productDetail";
import "normalize.css";
import "./web_modules/style/style.less";

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <Route path="productCenter" component={ProductCenter} />
          <Route path="productCenterDetail(/:id)" component={ProductDetail} />
          <Route path="activity" component={Activity} />
          <Route path="cases" component={Cases} />
          <Route path="center" component={Center} />
        </Route>
        <Route path="/home" component={Home} />
        <IndexRedirect to="/home" />
      </Router>
    );
  }
}
