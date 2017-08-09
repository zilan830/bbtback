import React from "react";
import { Row, Col } from "antd";
import circleImg from "web_modules/images/10.png";
import bottomImg from "web_modules/images/11.png";

export default class Concept extends React.Component {
  render() {
    return (
      <div>
        <div className="whiteContent">
          <Row>
            <Col span={12} className="pt40">
              <p className="title">企业理念 Enterprise Concept</p>
              <p className="font14 line40">
                <span className="textColorRed textWeight">经营理念：</span>
                清洁科技，创造舒适环境
              </p>
              <p className="font14 line40">
                <span className="textColorRed textWeight">核心价值观：</span>
                致力于打造高品质的清洁产品
              </p>
              <p className="font14 mb30 line40">
                <span className="textColorRed textWeight">服务宗旨：</span>
                责任感、专业服务、合作共赢
              </p>
              <p className="font14 mb20">
                <span className="textColorRed textWeight">
                  Management Concept：
                </span>
                <p className="line30">
                  Bennett Clean-Tech, Creating Comfortable Environment
                </p>
              </p>
              <p className="font14 mb20">
                <span className="textColorRed textWeight">Core Value：</span>
                <p className="line30">
                  To create high quality cleaning equipments
                </p>
              </p>
              <p className="font14">
                <span className="textColorRed textWeight">Service Tenet：</span>
                <p className="line30">
                  Responsibility，Professional，Win-win cooperation
                </p>
              </p>
            </Col>
            <Col span={12}>
              <img src={circleImg} />
            </Col>
          </Row>
        </div>

        <img src={bottomImg} style={{ marginBottom: "-110px" }} />
      </div>
    );
  }
}
