import React from "react";
import { Tabs, Row, Col, message } from "antd";
import machine3 from "web_modules/images/machine3.png";
import bannerImg1 from "web_modules/images/banner.jpg";
import SmallNav from "web_modules/component/smallNav";
//import vedio1 from "web_modules/vedio/1.mp4";
import baseReq from "web_modules/api/base";
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
        component: "1",
        selected: true
      },
      {
        key: 11,
        name: "clever系列",
        component: "2"
      },
      {
        key: 12,
        name: "ranger系列",
        component: "3"
      },
      {
        key: 13,
        name: "Hussar系列",
        component: "4"
      },
      {
        key: 14,
        name: "dragoon系列",
        component: "5"
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
        component: "6"
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
        component: "7"
      },
      {
        key: 31,
        name: "SPX系列",
        component: "8"
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
      currentComponent: "1",
      navColumn,
      ind: 0,
      tableList: [],
      dataList: []
    };
  }

  componentDidMount() {
    const reg = /[\d]+/g;
    const href = window.location.href;
    console.log("$PARANShhhhhhhhh", href.match(reg));
    //要改
    const type = href.match(reg)[1];
    const ind = href.match(reg)[2];
    if (href.indexOf("洗地机")) {
      this.renderSelect(0, type);
    } else if (href.indexOf("扫地机")) {
      this.renderSelect(1, type);
    } else {
      this.renderSelect(2, type);
    }
    this.setState({
      ind
    });
    this.getData(type);
  }

  renderSelect = (num, type) => {
    const { navColumn } = this.state;
    navColumn.forEach(item => {
      item.selected = false;
      if (item.children) {
        item.children.forEach(it => {
          it.selected = false;
        });
      }
    });
    navColumn.forEach((item, index) => {
      if (index === num) {
        item.selected = true;
        if (item.children) {
          item.children.forEach((it, ind) => {
            if (it.component === type) {
              it.selected = true;
            }
          });
        }
      }
    });
  };

  getData = catId => {
    baseReq(`/goods/goodsInfo/${catId}`)
      .then(res => {
        this.setState({
          dataList: res
        });
      })
      .then(() => {
        this.getTable();
      })
      .catch(err => {
        message.error(err);
      });
  };

  onClick = component => {
    this.setState({
      currentComponent: component
    });
    this.getData(component);
  };

  getTable = () => {
    const { dataList, ind } = this.state;
    const index = parseInt(ind);
    console.log("$PARANSindex", index);
    console.log("$PARANSdataListssss", dataList);
    const goodsId = dataList[index].gid;
    console.log("$PARANSgoodsId", goodsId);
    baseReq(`/goods/reference/${goodsId}`)
      .then(res => {
        console.log("$PARANSres", res);
        this.setState({
          tableList: res
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  handleImg = key => {
    console.log("$PARANSid", key);
    this.setState({
      ind: key
    });
  };

  render() {
    const { dataList, tableList, ind } = this.state;
    let imgContent = [];
    let tableContent = [];
    let tableDetList = [];
    const index = parseInt(ind);
    let Name = "";
    if (dataList.length > 0) {
      tableDetList = dataList[index];
      Name = tableDetList.goodsName;
      const imgList = dataList.map((item, index) => {
        return {
          imgUrl: item.imgUrl,
          gid: item.gid,
          goodsName: item.goodsName
        };
      });
      imgContent = imgList.map((item, index) => {
        return (
          <TabPane
            tab={
              <div className="smallImgTag">
                <img src={item.imgUrl} />
                {item.goodsName}
              </div>
            }
            key={index}
          >
            <div className="bigImgTag">
              <div className="bigImgInt">
                {item.goodsName}
              </div>
              <div className="bigImgCon">
                <img src={item.imgUrl} />
              </div>
            </div>
          </TabPane>
        );
      });
      imgContent = (
        <Tabs
          defaultActiveKey={ind}
          tabPosition="right"
          style={{ height: 400 }}
          onChange={key => {
            this.handleImg(key);
          }}
        >
          {imgContent}
        </Tabs>
      );
    }
    console.log("$PARANStableList", tableList);
    if (tableList.length > 0) {
      tableContent = tableList.map((item, index) =>
        <tr key={`tr-${index}`}>
          <td>
            {item.name}
          </td>
          <td>
            {item.item}
          </td>
          <td>
            {item.value}
          </td>
        </tr>
      );
      console.log("$PARANStableContent", tableContent);
      tableContent.unshift(
        <tr key="head">
          <th>名称</th>
          <th>Name</th>
          <th>
            {Name}
          </th>
        </tr>
      );
    }
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
            {imgContent}
          </div>

          <div className="productDetInt">
            <Tabs defaultActiveKey="1">
              <TabPane tab="产品详情" key="1">
                <div className="productDetIntCon">
                  <p>
                    <span className="productDetIntTitle">产品型号：</span>
                    {tableDetList.goodsName}
                  </p>
                  <p>
                    <span className="productDetIntTitle">适用范围：</span>
                    {tableDetList.goodsRange}
                  </p>
                  <p>
                    <span className="productDetIntTitle">产品介绍：</span>
                  </p>
                  <p>
                    <span className="circle" />
                    {`主要特点：${tableDetList.feature}`}
                  </p>
                  <p>
                    <span className="circle" />产品优势
                  </p>
                  <p>
                    {tableDetList.advantage && tableDetList.advantage.length > 0
                      ? tableDetList.advantage.map((item, index) =>
                          <span key={`advantage-${index}`} className="inlineP">
                            {index + 1}、{item}
                          </span>
                        )
                      : null}
                  </p>
                </div>
              </TabPane>
              <TabPane tab="技术参数" key="2">
                <div className="productDetIntCon">
                  <table className="productDetIntTable">
                    {tableContent}
                  </table>
                </div>
              </TabPane>
              <TabPane tab="操作讲解" key="3">
                {tableDetList.videoUrl
                  ? <div className="productDetIntCon">
                      <video
                        width="100%"
                        height="100%"
                        src={tableDetList.videoUrl}
                        controls
                      >
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                  : null}
                {tableDetList.instruction
                  ? <div className="productDetIntCon">
                      <img src={tableDetList.instruction} />
                    </div>
                  : null}
              </TabPane>
              <TabPane tab="应用案例" key="4">
                <div className="productDetIntCon">
                  <video
                    width="100%"
                    height="100%"
                    src={tableDetList.application}
                    controls
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
