import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Picture from "./picture";
import Video from "./video";
import { Button } from "antd";

const navColumn = [
  {
    key: 1,
    name: "案例集锦",
    selected: true,
    span: 24,
    children: [
      {
        key: 10,
        name: "案例集锦-图片",
        selected: true,
        component: "Picture"
      },
      {
        key: 11,
        name: "案例集锦-视频",
        component: "Video"
      }
    ]
  }
];

const breadColumn = ["案例集锦", "案例集锦-图片"];

const span = {
  nav: 12,
  bread: 12
};

export default class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "Picture"
    };
  }

  componentWillReceiveProps(props) {
    console.log("$PARANSprops", props);
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    console.log("$PARANScurrentComponent", currentComponent);
    return (
      <div className="caseContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent === "Picture" ? <Picture /> : null}
          {currentComponent === "Video" ? <Video /> : null}
        </div>
      </div>
    );
  }
}
