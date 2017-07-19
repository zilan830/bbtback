import React from "react";
import { Link } from "react-router";
import { Carousel, Row, Col } from "antd";
import bannerImg1 from "web_modules/images/banner.jpg";
import machine1 from "web_modules/images/machine1.png";
import machine2 from "web_modules/images/machine2.png";
import machine3 from "web_modules/images/machine3.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <Carousel autoplay>
          <div>
            <img src={bannerImg1} />
          </div>
          <div>
            <img src={bannerImg1} />
          </div>
          <div>
            <img src={bannerImg1} />
          </div>
        </Carousel>
        <div className="contentContainer">
          <Row className="productsLinkCon">
            <Col span={8} className="productsLinkItem">
              <Link to="/product/clean">
                <Row className="productsLinkContent">
                  <Col span={10} className="productLeft">
                    <div>
                      <img src={machine1} />
                    </div>
                  </Col>
                  <Col span={14} className="productRight">
                    <div>
                      <p>洗地机系列</p>
                      <p>cleaning machine series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/product/sweeper" className="second">
                <Row className="productsLinkContent">
                  <Col span={10} className="productLeft">
                    <div>
                      <img src={machine2} />
                    </div>
                  </Col>
                  <Col span={14} className="productRight">
                    <div>
                      <p>扫地机系列</p>
                      <p>floor sweeper series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/product/polisher" className="last">
                <Row className="productsLinkContent">
                  <Col span={10} className="productLeft">
                    <div>
                      <img src={machine3} />
                    </div>
                  </Col>
                  <Col span={14} className="productRight">
                    <div>
                      <p>擦地机系列</p>
                      <p>floor polisher series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
          </Row>
          <Row className="categoryContainer">
            <Col span={8} className="category">
              <p className="title">关于我们</p>
            </Col>
            <Col span={8} className="category" />
            <Col span={8} className="category" />
          </Row>
        </div>
      </div>
    );
  }
}
