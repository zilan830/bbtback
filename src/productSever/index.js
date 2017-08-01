import React from "react";
import { Row, Col } from "antd";
import bannerImg1 from "web_modules/images/banner.jpg";
import MachineChoice from "./machineChoice";
import Supplies from "./supplies";
import Warranty from "./warranty";
import Malfunction from "./malfunction";

export default class ProductSever extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="productSeverContainer">
        <div className="contentContainer">
          <Row className="productTitleContainer font-hei">
            <Col span={16} className="productTitles">
              <Col span={6} className="productItem active">
                机器选型
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
              <Col span={6} className="productItem">
                耗材选购
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
              <Col span={6} className="productItem">
                保修说明
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
              <Col span={6} className="productItem">
                常见故障说明
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
            </Col>
            <Col span={8} className="productPosition">
              当前位置:首页>产品服务
            </Col>
          </Row>
          <MachineChoice />
          <Supplies />
          <Warranty />
          <Malfunction />
        </div>
      </div>
    );
  }
}
