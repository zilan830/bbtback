import React from "react";
import SmallNav from "web_modules/component/smallNav";
import News from "./news";

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

const breadColumn = ["公司动态", "企业新闻"];

const span = {
  nav: 6,
  bread: 18
};

export default class Activity extends React.Component {
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
    return (
      <div className="activityContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          <News />
        </div>
      </div>
    );
  }
}
