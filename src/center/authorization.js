import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";

export default class Authorization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whiteContent">
        <p className="title">授权服务中心</p>
        <div className="authCon">
          <div className="authItem">
            <p className="area">东北区</p>
            <p className="areaItem">
              <span>1、黑龙江哈哈哈哈哈</span>
              <span>黑龙江省</span>
            </p>
            <p className="areaItem">
              <span>2、黑龙江哈哈哈哈哈呵呵呵</span>
              <span>黑龙江省</span>
            </p>
            <p className="areaItem">
              <span>3、黑龙江哈哈哈哈哈呵呵呵哼哼哼</span>
              <span>黑龙江省</span>
            </p>
          </div>
          <div className="authItem">
            <p className="area">华北区</p>
            <p className="areaItem">
              <span>1、黑龙江哈哈哈哈哈</span>
              <span>黑龙江省</span>
            </p>
            <p className="areaItem">
              <span>2、黑龙江哈哈哈哈哈呵呵呵</span>
              <span>黑龙江省</span>
            </p>
            <p className="areaItem">
              <span>3、黑龙江哈哈哈哈哈呵呵呵哼哼哼</span>
              <span>黑龙江省</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
