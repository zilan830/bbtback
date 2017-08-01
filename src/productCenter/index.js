import React from "react";
import { Carousel, Row, Col } from "antd";
import { Link } from "react-router";
import machine3 from "web_modules/images/machine3.png";

export default class ProductCenter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const height1 = document.getElementById("productImgCol1").clientHeight;
    const height2 = document.getElementById("productImgCol2").clientHeight;
    const height = height1 > height2 ? height1 : height2;
    document.getElementById("productImgCol1").style.height = `${height}px`;
    document.getElementById("productImgCol2").style.height = `${height}px`;
  }

  render() {
    return (
      <div className="productContainer">
        <div className="productBanner">
          <img src="" />
        </div>
        <div className="contentContainer">
          <Row className="productTitleContainer">
            <Col span={10} className="productTitles">
              <Col span={8} className="productItem active">
                洗地机系列
              </Col>
              <Col span={8} className="productItem">
                扫地机系列
              </Col>
              <Col span={8} className="productItem">
                擦地机系列
              </Col>
            </Col>
            <Col span={14} className="productPosition">
              当前位置:首页>产品中心>洗地机系列
            </Col>
          </Row>
          <Row gutter={24} className="productImgProfile">
            <Col span={12} id="productImgCol1" className="productImgCol">
              <div className="productImgConItem">
                <p className="produceItemTitle">手推式洗地机</p>
                <p className="productIntroduction">
                  呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵 呵呵呵呵呵
                </p>
                <div className="productItem">
                  <p className="productType">
                    中型 <span>(3900-5100)m/h</span>
                  </p>
                  <Row gutter={24} className="productItemImgRow">
                    <Col span={12}>
                      <Link to="/productDetail">
                        <div className="productItemImgCon">
                          <div className="productItemImg">
                            <img src={machine3} />
                          </div>
                          <div className="productItemImgInt">
                            型号 <span className="det">1470</span>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Link to="/productDetail">
                        <div className="productItemImgCon">
                          <div className="productItemImg">
                            <img src={machine3} />
                          </div>
                          <div className="productItemImgInt">
                            型号 <span className="det">1470</span>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={12} id="productImgCol2" className="productImgCol">
              <div className="productImgConItem">
                <p className="produceItemTitle">手推式洗地机</p>
                <p className="productIntroduction" />
                <div className="productItem">
                  <p className="productType">
                    中型 <span>(3900-5100)m/h</span>
                  </p>
                  <Row gutter={24} className="productItemImgRow">
                    <Col span={12}>
                      <Link to="/productDetail">
                        <div className="productItemImgCon">
                          <div className="productItemImg">
                            <img src={machine3} />
                          </div>
                          <div className="productItemImgInt">
                            型号 <span className="det">1470</span>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Link to="/productDetail">
                        <div className="productItemImgCon">
                          <div className="productItemImg">
                            <img src={machine3} />
                          </div>
                          <div className="productItemImgInt">
                            型号 <span className="det">1470</span>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                  <Row gutter={24} className="productItemImgRow">
                    <Col span={12}>
                      <div className="productItemImgCon">
                        <div className="productItemImg">
                          <img src={machine3} />
                        </div>
                        <div className="productItemImgInt">
                          型号 <span className="det">1470</span>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="productItemImgCon">
                        <div className="productItemImg">
                          <img src={machine3} />
                        </div>
                        <div className="productItemImgInt">
                          型号 <span className="det">1470</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
