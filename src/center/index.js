import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Authorization from "./authorization";

const navColumn = [
  {
    key: 1,
    name: "授权服务中心",
    selected: true,
    span: 24
  }
];

const breadColumn = ["授权服务中心"];

const span = {
  nav: 6,
  bread: 18
};

export default class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "Authorization"
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
          {currentComponent === "Authorization" ? <Authorization /> : null}
        </div>
      </div>
    );
  }
}
