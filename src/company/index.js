import React from "react";
import { Row, Col } from "antd";
import About from "./about";
import Concept from "./concept";
import SmallNav from "web_modules/component/smallNav";

const navColumn = [
  {
    key: 1,
    name: "关于我们",
    selected: true,
    span: 6,
    children: [
      {
        key: 10,
        name: "公司简介",
        selected: true,
        component: "About"
      },
      {
        key: 11,
        name: "产品发展史"
      }
    ]
  },
  {
    key: 2,
    name: "企业理念",
    span: 6,
    component: "Concept"
  },
  {
    key: 3,
    name: "资质荣誉",
    span: 6
  },
  {
    key: 4,
    name: "贝纳特宣传册",
    span: 6
  }
];

const breadColumn = ["贝纳特", "关于我们", "公司简介"];

const span = {
  nav: 13,
  bread: 11
};

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "About"
    };
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    console.log("$-currentComponent", currentComponent);
    return (
      <div className="companyContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === "About" ? <About /> : null}
          {currentComponent === "Concept" ? <Concept /> : null}
        </div>
      </div>
    );
  }
}
