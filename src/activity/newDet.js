import React from "react";
import { Row, Col, Pagination, message, Carousel } from "antd";
import { Link } from "react-router";
import baseReq from "web_modules/api/base";
import pic01 from "web_modules/images/pic01.png";

export default class NewsDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: []
    };
  }

  render() {
    return (
      <div style={{ padding: "0 180px" }}>
        <p className="title">标题</p>
        <p className="textColorGrey font14 font-fang-song line20">
          测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了
        </p>
        <img style={{ margin: "30px 0" }} src={pic01} />
      </div>
    );
  }
}
