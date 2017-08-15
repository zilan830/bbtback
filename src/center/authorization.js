import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";
import dataHoc from "web_modules/component/datas";

@dataHoc({ url: "/right_issuer/list" }, response => {
  return { data: response };
})
export default class Authorization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("$PARANSdata", this.props.data);
    const data = this.props.data || [];
    const content = data.map((item, index) => {
      const list = [];
      if (item.hasOwnProperty("child")) {
        item.child.map((it, ind) => {
          list.push(
            <p key={`it-${ind}`} className="areaItem">
              <span>
                {ind + 1}、{it.company}
              </span>
              <span>
                {it.area}
              </span>
            </p>
          );
        });
      }
      return (
        <div key={`item-${index}`} className="authItem">
          <p className="area">
            {item.areaName}
          </p>
          {list}
        </div>
      );
    });
    return (
      <div className="whiteContent">
        <p className="title">授权服务中心</p>
        <div className="authCon">
          {content}
        </div>
      </div>
    );
  }
}
