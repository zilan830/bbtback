import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import bannerImg8 from "web_modules/images/08.jpg";

/*
 * 常见故障
 * */

export default class Malfunction extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="productServerContainer">
        <div className="productServerBanner">
          <img src={bannerImg8} />
        </div>
        <div className="textContent">
          <p className="title">Smart 系列常见故障排除：</p>
          <Row className="malfunction">
            <Col span={8} className="malfunctionItem">
              <p className="textWeight">1、喷洒到毛刷上的水不足</p>
              <p className="font-fang-song">(1)水阀是否打开</p>
              <p className="font-fang-song mb20">(2)溶液箱有没有水</p>
              <p className="textWeight">2、洗涤效果不佳</p>
              <p className="font-fang-song">检查刷子的磨损状况，当刷毛长度小于15mm时应予更换</p>
            </Col>
            <Col span={8} className="malfunctionItem">
              <p className="textWeight">3、吸水扒不能完全吸干地面</p>
              <p className="font-fang-song">(1)检查橡胶条是否干净。</p>
              <p className="font-fang-song">(2)调整吸水扒的倾斜度。</p>
              <p className="font-fang-song">(3)真空管的安装是否正确</p>
              <p className="font-fang-song">(4)拆下整个真空系统总成并予以清洗。</p>
              <p className="font-fang-song">(5)如橡胶条磨损严重则换之。</p>
              <p className="font-fang-song">(6)检查真空电机是否打开。</p>
              <p className="font-fang-song">(7)调整吸水扒高度。</p>
            </Col>
            <Col span={8} className="malfunctionItem">
              <p className="textWeight">4、产生了过多泡沫</p>
              <p className="font-fang-song">
                (1)是否使用了低泡清洗剂，如有需要，往污液箱内加入少量的抗泡剂。
              </p>
              <p className="font-fang-song">(2)地面不太脏导致过多泡沫的产生，此时应该减少清洁剂的使用量。</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
