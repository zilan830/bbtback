import React from "react";
import SmallNav from "web_modules/component/smallNav";
import Picture from "./picture";
import Video from "./video";

const breadColumn = ["案例集锦", "案例集锦-图片"];

const span = {
  nav: 12,
  bread: 12
};

export default class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.nav = [
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
    this.state = {
      currentComponent: "Picture"
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
      <div className="caseContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={this.nav}
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
