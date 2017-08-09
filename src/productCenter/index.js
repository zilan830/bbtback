import React from "react";
import { Carousel, Row, Col } from "antd";
import { Link } from "react-router";
import machine3 from "web_modules/images/machine3.png";
import product01 from "web_modules/images/product01.png";
import SmallNav from "web_modules/component/smallNav";
import dataHoc from "web_modules/component/datas";
import baseReq from "web_modules/api/base";

const navColumn = [
  {
    key: 1,
    name: "洗地机系列",
    selected: true,
    span: 8,
    component: "1"
  },
  {
    key: 2,
    name: "扫地机系列",
    span: 8,
    component: "2"
  },
  {
    key: 3,
    name: "擦地机系列",
    span: 8,
    component: "3"
  }
];

const breadColumn = ["产品中心", "洗地机系列"];

const span = {
  nav: 10,
  bread: 14
};

export default class ProductCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: {},
      currentComponent: "1"
    };
  }

  getData = id => {
    const url = `/goods/goodsList/${id}`;
    baseReq(url)
      .then(res => {
        console.log("$PARANS", res);
        this.setState({
          dataList: res
        });
      })
      .then(() => {
        const height1 = document.getElementById("productImgCol1").clientHeight;
        const height2 = document.getElementById("productImgCol2").clientHeight;
        const height = height1 > height2 ? height1 : height2;
        document.getElementById("productImgCol1").style.height = `${height}px`;
        document.getElementById("productImgCol2").style.height = `${height}px`;
      });
  };

  onClick = component => {
    this.setState({
      currentComponent: component
    });
    this.getData(component);
  };

  componentDidMount() {
    this.getData("1");
    // console.log('$componentDidMount', this.props.data);
    // this.onClick("1");
  }

  // componentWillReceiveProps(props) {
  //
  //   if (props.data !== this.props.data) {
  //     console.log('$compontentWillReceiveProps', props.data)
  //     this.getData("1");
  //     const height1 = document.getElementById("productImgCol1").clientHeight;
  //     const height2 = document.getElementById("productImgCol2").clientHeight;
  //     const height = height1 > height2 ? height1 : height2;
  //     document.getElementById("productImgCol1").style.height = `${height}px`;
  //     document.getElementById("productImgCol2").style.height = `${height}px`;
  //
  //   }
  // }

  //判断object是否为空
  noEmpty = obj => {
    for (const name in obj) {
      return true;
    }
    return false;
  };

  render() {
    console.log("data========", this.props.data);
    // const dataList = this.props.data;
    console.log("dataList========", dataList);
    const { currentComponent, dataList } = this.state;
    let content = [];
    let itemName = "";
    let goodsRange = "";
    if (this.noEmpty(dataList)) {
      console.log("$dataList", dataList);
      switch (currentComponent) {
        case "1":
          itemName = "洗地机";
          break;
        case "2":
          itemName = "扫地机";
          break;
        case "3":
          itemName = "擦地机";
          break;
        default:
          break;
      }
      let type = "";
      const regex1 = /[\(（][\s\S]*[\)）]/; //取括号里的数据
      const regex2 = /[\u4e00-\u9fa5]/g; //获取类型 中文
      for (const items in dataList) {
        console.log("$items", items);
        const itemContent = dataList[items].map((item, index) => {
          type = Object.keys(item)[0];
          const listContent = item[Object.keys(item)[0]].map((list, index) => {
            goodsRange = list.goodsRange;
            return (
              <Col key={index} span={12}>
                <Link to={`/productDetail/${list.catId}`}>
                  <div className="productItemImgCon">
                    <div className="productItemImg">
                      <img src={list.imgUrl} />
                    </div>
                    <div className="productItemImgInt">
                      {list.model}{" "}
                      <span className="det">
                        {list.power}m<sup className="sub1">2</sup>/h
                      </span>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          });
          const typech = type.match(regex2).reduce((sum, value) => {
            return sum + value;
          }, "");
          return (
            <div className="productItem">
              <p className="productType">
                {typech}
                <span>
                  {type.match(regex1)}m<sup className="sub1">2</sup>/h
                </span>
              </p>
              <Row gutter={24} className="productItemImgRow">
                {listContent}
              </Row>
            </div>
          );
        });
        content.push(
          <Col span={12} id={`productImgCol1`} className="productImgCol">
            <div className="productImgConItem">
              <p className="produceItemTitle">{`${items}${itemName}`}</p>
              <p className="productIntroduction">
                {goodsRange}
              </p>
              {itemContent}
            </div>
          </Col>
        );
      }
    }

    return (
      <div className="productContainer">
        <div className="productBanner">
          <img src={product01} />
        </div>
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />

          <Row gutter={24} className="productImgProfile">
            {content}
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
