import React from "react";
import { Tabs, Row, Col } from "antd";
import machine3 from "web_modules/images/machine3.png";
import bannerImg1 from "web_modules/images/banner.jpg";
import SmallNav from "web_modules/component/smallNav";
//import vedio1 from "web_modules/vedio/1.mp4";
const TabPane = Tabs.TabPane;

const videos = {
  test: require("./1.mp4")
};

const navColumn = [
  {
    key: 1,
    name: "洗地机系列",
    selected: true,
    span: 8,
    children: [
      {
        key: 10,
        name: "smart系列",
        component: "Smart",
        selected: true
      },
      {
        key: 11,
        name: "clever系列",
        component: "Clever"
      },
      {
        key: 12,
        name: "ranger系列",
        component: "Ranger"
      },
      {
        key: 13,
        name: "Hussar系列",
        component: "Hussar"
      },
      {
        key: 14,
        name: "dragoon系列",
        component: "Dragoon"
      }
    ]
  },
  {
    key: 2,
    name: "扫地机系列",
    span: 8,
    children: [
      {
        key: 20,
        name: "tornado系列",
        component: "Tornado"
      }
    ]
  },
  {
    key: 3,
    name: "擦地机系列",
    span: 8,
    children: [
      {
        key: 30,
        name: "PX系列",
        component: "PX"
      },
      {
        key: 31,
        name: "SPX系列",
        component: "SPX"
      }
    ]
  }
];

const breadColumn = ["产品中心", "洗地机系列", "smart系列"];

const span = {
  nav: 10,
  bread: 14
};

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "smart系列"
    };
  }

  componentDidMount() {
    const reg = /[\d]{1,4}/g;
    const href = window.location.href;
    console.log("$PARANShhhhhhhhh", href.match(reg));
  }

  onClick = component => {
    console.log("$PARANScomponent", component);
    this.setState({
      currentComponent: component
    });
    this.getData(component);
  };

  render() {
    return (
      <div className="productDetailContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />

          <div className="productImgShow">
            <Tabs
              defaultActiveKey="1"
              tabPosition="right"
              style={{ height: 400 }}
            >
              <TabPane
                tab={
                  <div className="smallImgTag">
                    <img src={machine3} />1111
                  </div>
                }
                key="1"
              >
                <div className="bigImgTag">
                  <div className="bigImgInt">111</div>
                  {/*<img src={machine3}/>*/}
                  <div className="bigImgCon">
                    <img src={machine3} />
                  </div>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <div className="smallImgTag">
                    <img src={machine3} />2222
                  </div>
                }
                key="2"
              >
                222<img src={machine3} />
              </TabPane>
              <TabPane
                tab={
                  <div className="smallImgTag">
                    <img src={machine3} />2222
                  </div>
                }
                key="3"
              >
                222<img src={machine3} />
              </TabPane>
            </Tabs>
          </div>

          <div className="productDetInt">
            <Tabs defaultActiveKey="1">
              <TabPane tab="产品详情" key="1">
                <div className="productDetIntCon">
                  <p>
                    <span className="productDetIntTitle">产品型号：</span>Smart
                  </p>
                  <p>
                    <span className="productDetIntTitle">
                      适用范围：
                    </span>适用于较小空间或中等空间的地面清洁
                  </p>
                  <p>
                    <span className="productDetIntTitle">产品介绍：</span>
                  </p>
                  <p>
                    <span className="circle" />主要特点：小巧、轻便
                  </p>
                  <p>
                    <span className="circle" />产品优势
                  </p>
                  <p>
                    <span className="inlineP">1. 电瓶式洗地机，机型小，活动范围不受限，操作方便。</span>
                    <span className="inlineP">
                      2. 按钮开关设计，配有红绿色指示灯，象形功能图案，使用简单，培训、维护成本低。
                    </span>
                    <span className="inlineP">
                      2. 按钮开关设计，配有红绿色指示灯，象形功能图案，使用简单，培训、维护成本低。
                    </span>
                  </p>
                </div>
              </TabPane>
              <TabPane tab="技术参数" key="2">
                <div className="productDetIntCon">
                  <table className="productDetIntTable">
                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Country</th>
                    </tr>

                    <tr>
                      <td>Apple</td>
                      <td>Steven Jobs</td>
                      <td>USA</td>
                    </tr>

                    <tr class="alt">
                      <td>Baidu</td>
                      <td>Li YanHong</td>
                      <td>China</td>
                    </tr>

                    <tr>
                      <td>Google</td>
                      <td>Larry Page</td>
                      <td>USA</td>
                    </tr>

                    <tr class="alt">
                      <td>Lenovo</td>
                      <td>Liu Chuanzhi</td>
                      <td>China</td>
                    </tr>

                    <tr>
                      <td>Microsoft</td>
                      <td>Bill Gates</td>
                      <td>USA</td>
                    </tr>

                    <tr class="alt">
                      <td>Nokia</td>
                      <td>Stephen Elop</td>
                      <td>Finland</td>
                    </tr>
                  </table>
                </div>
              </TabPane>
              <TabPane tab="操作讲解" key="3">
                <div className="productDetIntCon">
                  <video width="100%" height="100%" src={videos.test} controls>
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <div className="productDetIntCon">
                  <img src={bannerImg1} />
                </div>
              </TabPane>
              <TabPane tab="应用案例" key="4">
                <div className="productDetIntCon">应用案例</div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
