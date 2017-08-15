import React from "react";
import { Router, Route, hashHistory, IndexRedirect } from "react-router";
import Template from "./template";
import Activity from "./activity";
import Cases from "./cases";
import Center from "./center";
import Company from "./company";
import Contact from "./contact";
import Home from "./home";
import ProductCenter from "./productCenter";
import ProductSever from "./productSever";
import ProductDetail from "./productDetail";
import "normalize.css";
import "./web_modules/style/style.less";

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <Route path="home" component={Home} />
          <Route path="productCenter(/:id)" component={ProductCenter} />
          <Route path="productCenterDetail(/:id)" component={ProductDetail} />
          <Route path="productSever(/:id)" component={ProductSever} />
          <Route path="company" component={Company} />
          <Route path="activity" component={Activity} />
          <Route path="contact" component={Contact} />
          <Route path="cases" component={Cases} />
          <Route path="center" component={Center} />
          <IndexRedirect to="home" />
        </Route>
      </Router>
    );
  }
}
