import React from "react";
import { Row, Col } from "antd";
import About from "./about";
import Conpect from "./conpect";
import SmallNav from "web_modules/component/smallNav";

const navColumn = [
  {
    key: 1,
    name: "企业新闻",
    selected: true,
    span: 12
  },
  {
    key: 2,
    name: "展会风采",
    span: 12
  }
];

const breadColumn = ["贝纳特", "公司动态", "企业新闻"];

const span = {
  nav: 16,
  bread: 8
};

export default class Company extends React.Component {
  onClick = () => {};

  render() {
    return (
      <div className="companyContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
          />
          <About />
          <Conpect />
        </div>
      </div>
    );
  }
}
