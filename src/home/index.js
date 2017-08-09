import React from "react";
import { Link } from "react-router";
import { Carousel, Row, Col } from "antd";
import bannerImg1 from "web_modules/images/banner.jpg";
import machine1 from "web_modules/images/machine1.png";
import machine2 from "web_modules/images/machine2.png";
import machine3 from "web_modules/images/machine3.png";
import dataHoc from "web_modules/component/datas";
import apiList from "web_modules/api/apilist";
import "isomorphic-fetch";
import axios from "axios";

@dataHoc({ url: "/goods/categories/1" }, response => {
  return { data: response };
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log("context",this.context)
  }

  onClick() {
    // axios({
    //   method: "post",
    //   url: "http://47.92.123.27:80/goods/categories/1"
    // }).then(function(response) {
    //   console.log("response", response);
    // });
  }

  componentDidMount() {}

  render() {
    console.log("data========", this.props.data);
    return (
      <div className="homeContainer">
        <div className="bannerContainer">
          <Carousel>
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
        </div>
        <div className="contentContainer">
          <Row className="productsLinkCon font-hei" gutter={48}>
            <Col
              span={8}
              className="productsLinkItem"
              onClick={() => {
                this.onClick();
              }}
            >
              <Link to="/productCenter/clean">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine1} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      <p>洗地机系列</p>
                      <p>cleaning machine series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/productCenter/sweeper" className="second">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine2} style={{ maxWidth: "50px" }} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      <p>扫地机系列</p>
                      <p>floor sweeper series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col span={8} className="productsLinkItem">
              <Link to="/productCenter/polisher" className="last">
                <Row className="productsLinkContent">
                  <Col span={9} className="productLeft">
                    <div>
                      <img src={machine3} />
                    </div>
                  </Col>
                  <Col span={15} className="productRight">
                    <div>
                      <p>擦地机系列</p>
                      <p>floor polisher series</p>
                    </div>
                  </Col>
                </Row>
              </Link>
            </Col>
          </Row>
          <Row className="categoryContainer" gutter={48}>
            <Col span={8} className="category">
              <p className="title">关于我们</p>
              <div className="categoryInner">
                <p className="categoryText font-fang-song">
                  公司公司公司公司公司公司公司公司公司公司 公司公司公司公司公司公司公司公司公司公司 公司公司公司公司公司公司公司公司公司公司
                  公司公司公司公司公司公司公司公司公司公司 公司公司公司公司公司公司公司公司公司公司
                </p>
              </div>
            </Col>
            <Col span={8} className="category">
              <p className="title">新闻动态</p>
              <div className="categoryInner">
                <ul className="categoryUl">
                  <li className="categoryLi">
                    <Link className="categoryLink">
                      <span className="categoryTile categoryText">
                        标题标题标题标题标题标题
                      </span>
                      <span className="categoryTime categoryText">
                        2017-1-1
                      </span>
                    </Link>
                  </li>
                  <li className="categoryLi">
                    <Link className="categoryLink font-song">
                      <span className="categoryTile categoryText">
                        标题标题标题标题标题标题
                      </span>
                      <span className="categoryTime categoryText">
                        2017-1-1
                      </span>
                    </Link>
                  </li>
                  <li className="categoryLi">
                    <Link className="categoryLink">
                      <span className="categoryTile categoryText">
                        标题标题标题标题标题标题
                      </span>
                      <span className="categoryTime categoryText">
                        2017-1-1
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={8} className="category">
              <p className="title">案例集锦</p>
              <Row className="categoryInner">
                <Col span={14} className="categoryImgCon">
                  <div className="categoryImg">
                    <img src={bannerImg1} />
                  </div>
                </Col>
                <Col span={10} className="categoryImgTitle">
                  <div className="categoryText font-song">公司案例集锦</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
