import React from "react";
import { Link } from "react-router";
import { Carousel, Row, Col, message } from "antd";
import bannerImg1 from "web_modules/images/banner1.jpg";
import bannerImg2 from "web_modules/images/banner2.jpg";
import bannerImg3 from "web_modules/images/banner3.jpg";
import bannerImg4 from "web_modules/images/banner4.jpg";
import machine1 from "web_modules/images/machine1.png";
import machine2 from "web_modules/images/machine2.png";
import machine3 from "web_modules/images/machine3.png";
import baseReq from "web_modules/api/base";
import moment from "moment";
import apiList from "web_modules/api/apilist";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log("context",this.context)
    this.state = {
      newInfo: [],
      caseInfo: []
    };
  }

  onClick() {
    // axios({
    //   method: "post",
    //   url: "http://47.92.123.27:80/goods/categories/1"
    // }).then(function(response) {
    //   console.log("response", response);
    // });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    baseReq("/news/newsList/0/3")
      .then(res => {
        this.setState({
          newInfo: res
        });
      })
      .catch(err => {
        message.error(err);
      });
    baseReq("/cases/casesList/0/0/1")
      .then(res => {
        this.setState({
          caseInfo: res
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  render() {
    console.log("data========", this.props.data);
    const { newInfo, caseInfo } = this.state;
    const content = newInfo.map((item, index) => {
      return (
        <li key={index} className="categoryLi">
          <Link className="categoryLink">
            <Row>
              <Col
                span={18}
                className="categoryTile categoryText"
                style={{ letterSpacing: 0, height: "100%", lineHeight: "24px" }}
              >
                {item.title.slice(0, 16)}
              </Col>
              <Col
                span={6}
                className="categoryTime categoryText"
                style={{
                  letterSpacing: 0,
                  textAlign: "right",
                  height: "100%",
                  lineHeight: "24px"
                }}
              >
                {moment(item.createTime).format("YYYY-DD-MM")}
              </Col>
            </Row>
          </Link>
        </li>
      );
    });
    return (
      <div className="homeContainer">
        <div className="bannerContainer">
          <Carousel autoplay>
            <div>
              <img src={bannerImg1} />
            </div>
            <div>
              <img src={bannerImg2} />
            </div>
            <div>
              <img src={bannerImg3} />
            </div>
            <div>
              <img src={bannerImg4} />
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
                  昆山市贝纳特机械设备有限公司是一家集研发、制造、分销于一体的综合性清洁设备企业。自2007年成立至今，依托于长江三角经济开发区——昆山市千灯镇这一地理优势，一直致力于提供最优质、最高效、最经济的……
                </p>
              </div>
            </Col>
            <Col span={8} className="category">
              <p className="title">新闻动态</p>
              <div className="categoryInner">
                <ul className="categoryUl">
                  {content}
                </ul>
              </div>
            </Col>
            <Col span={8} className="category">
              <p className="title">案例集锦</p>
              {caseInfo.length > 0
                ? <Row className="categoryInner">
                    <Col span={14} className="categoryImgCon">
                      <div className="categoryImg">
                        <img src={caseInfo.info_url} />
                      </div>
                    </Col>
                    <Col span={10} className="categoryImgTitle">
                      <div className="categoryText font-song">
                        {caseInfo.title}
                      </div>
                    </Col>
                  </Row>
                : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
