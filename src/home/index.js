import React from "react";
import { Link } from "react-router";
import { Carousel, Row, Col } from "antd";
import bannerImg1 from "web_modules/images/banner.jpg";
import machine1 from "web_modules/images/machine1.png";
import machine2 from "web_modules/images/machine2.png";
import machine3 from "web_modules/images/machine3.png";
import apiList from "web_modules/api/apilist";
import "isomorphic-fetch";
import axios from "axios";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log("context",this.context)
  }

  onClick() {
    console.log("hhhhhhh");
    // fetch('www.baidu.com').then(res => console.log(res)).catch(err => console.log('sdsdsd', err));

    // apiList.testApi({"userCode":"lifuyi","password":"1111"})
    //   .then(res => {
    //     console.log("res",res)
    //   }).catch(err => {
    //   console.log("err",err)
    // })

    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";

    axios({
      method: "post",
      url: "http://47.92.123.27:8081/goods/categories/1"
    }).then(function(response) {
      console.log("response", response);
    });

    // axios
    //   .post("http://47.92.123.27:8081/goods/categories/1")
    //   .then(function(response) {
    //     console.log("res", response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // And we'd call it as such:

    // this.makeRequest('GET', 'http://apigalen.nongfenqi.net/bank?startIndex=0&pageSize=10', function (err, datums) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(datums);
    // });

    // this.makeRequest()
    //   .then(res => {
    //     console.log("res", res);
    //   })
  }

  makeRequest = (url, data) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      if (window.XDomainRequest) {
        xhr = new XDomainRequest();
      } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      }
      xhr.open("GET", "http://47.92.123.27:8081/goods/categories/1", false);
      xhr.send();
      // console.log("ressssss",xhr.responseText.split("\n"))
      // resolve(xhr.responseText.split("\n"));
      const res = JSON.parse(xhr.responseText.split("\n"));
      resolve(res);
    });

    // const hostipInfo = xhr.responseText.split("\n");
    //
    // console.log("hostipInfo", hostipInfo)

    // let IP = false;
    // let ipAddress;
    // for (i = 0; hostipInfo.length >= i; i++) {
    //   if (hostipInfo[i]) {
    //     ipAddress = hostipInfo[i].split(":");
    //     if (ipAddress[0] == "IP") {
    //       IP = ipAddress[1];
    //     }
    //   }
    // }
    // return IP;

    // xhr.open(method, url);
    // xhr.onload = function () {
    //   done(null, xhr.response);
    // };
    // xhr.onerror = function () {
    //   done(xhr.response);
    // };
    // xhr.send();
  };

  componentDidMount() {
    console.log("testkasdkjaldskjaslkdjalsdj");
    const promise = new Promise((resolve, rejecr) => {
      console.log("run promise");
      resolve("hahaha");
    });
    promise.then(test => console.log(test));
  }

  render() {
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
