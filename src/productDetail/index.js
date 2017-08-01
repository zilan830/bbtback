import React from "react";
import { Tabs, Row, Col, Table } from "antd";
import machine3 from "web_modules/images/machine3.png";
import bannerImg1 from "web_modules/images/banner.jpg";
//import vedio1 from "web_modules/vedio/1.mp4";
const TabPane = Tabs.TabPane;

const videos = {
  test: require("./1.mp4")
};

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, row, index) => {
      if (index < 4) {
        return (
          <a href="#">
            {text}
          </a>
        );
      }
      return {
        children: (
          <a href="#">
            {text}
          </a>
        ),
        props: {
          colSpan: 5
        }
      };
    }
  },
  {
    title: "Age",
    dataIndex: "age",
    render: renderContent
  },
  {
    title: "Home phone",
    colSpan: 2,
    dataIndex: "tel",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    }
  },
  {
    title: "Phone",
    colSpan: 0,
    dataIndex: "phone",
    render: renderContent
  },
  {
    title: "Address",
    dataIndex: "address",
    render: renderContent
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park"
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park"
  }
];

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productDetailContainer">
        <div className="contentContainer">
          <Row className="productTitleContainer font-hei">
            <Col span={10} className="productTitles">
              <Col span={8} className="productItem active">
                洗地机系列
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
              <Col span={8} className="productItem">
                扫地机系列
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
              <Col span={8} className="productItem">
                擦地机系列
                <Row className="productDetCon">
                  <span className="productDetItem active">Smart 系列洗地机</span>
                  <span className="productDetItem">Clever 系列洗地机</span>
                  <span className="productDetItem">Ranger 系列洗地机</span>
                  <span className="productDetItem">Hussar 系列洗地机</span>
                  <span className="productDetItem">Dragoon 系列洗地机</span>
                </Row>
              </Col>
            </Col>
            <Col span={14} className="productPosition">
              当前位置:首页>产品中心>洗地机系列
            </Col>
          </Row>

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
                  <p className="font-fang-song">
                    <p>1. 电瓶式洗地机，机型小，活动范围不受限，操作方便。</p>
                    <p>2. 按钮开关设计，配有红绿色指示灯，象形功能图案，使用简单，培训、维护成本低。</p>
                    <p>2. 按钮开关设计，配有红绿色指示灯，象形功能图案，使用简单，培训、维护成本低。</p>
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
