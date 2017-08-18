import React from "react";
import { Row, Col } from "antd";
import evolution from "web_modules/images/evolution@4x.png";

export default class Evolution extends React.Component {
  render() {
    return (
      <div>
        <div className="backContent sp">
          <p className="title">产品发展史 The History Of Product</p>
        </div>
        <div className="imgContainerBorder">
          <div className="evolution01" />
          {/*<img src={evolution} />*/}
        </div>
      </div>
    );
  }
}
