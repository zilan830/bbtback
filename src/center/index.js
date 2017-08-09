import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Authorization from "./authorization";
import Merchants from "./merchants";

const navColumn = [
  {
    key: 1,
    name: "授权服务中心",
    selected: true,
    span: 24,
    children: [
      {
        key: 10,
        name: "授权服务中心",
        selected: true,
        component: "Authorization"
      },
      {
        key: 11,
        name: "招商加盟",
        component: "Merchants"
      }
    ]
  }
];

const breadColumn = ["授权服务中心", "招商加盟"];

const span = {
  nav: 6,
  bread: 18
};

export default class Center extends React.Component {
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
    return (
      <div className="centerContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === ""}
          <Authorization />
          <Merchants />
        </div>
      </div>
    );
  }
}
