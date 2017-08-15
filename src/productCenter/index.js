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
      dataList: [],
      currentComponent: "1"
    };
  }

  getData = id => {
    const url = `/goods/goodsList/${id}`;
    baseReq(url)
      .then(res => {
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
    const { currentComponent, dataList } = this.state;
    let content = [];
    let itemName = "";
    if (dataList.length > 0) {
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

      dataList.map((items, indexs) => {
        let itemsContent = [];
        let goodsRange = "";
        if (items.hasOwnProperty("child1")) {
          items.child1.map((item, index) => {
            let iContent = [];
            if (item.hasOwnProperty("child2")) {
              iContent = item.child2.map((i, ind) => {
                goodsRange = i.goodsRange;
                return (
                  <Col key={`i.goodsName${ind}`} span={12}>
                    <Link to={`/productCenterDetail/${i.catId}`}>
                      <div className="productItemImgCon">
                        <div className="productItemImg">
                          <img src={i.imgUrl} />
                        </div>
                        <div className="productItemImgInt">
                          {i.model}
                          <span className="det">
                            {i.power}m<sup className="sub1">2</sup>/h
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              });
              iContent = (
                <div key={`item.menu2${index}`} className="productItem">
                  <p className="productType">
                    {item.menu2.match(regex2)}{" "}
                    <span>
                      {item.menu2.match(regex1)}m<sup className="sub1">2</sup>/h
                    </span>
                  </p>
                  <Row gutter={24} className="productItemImgRow">
                    {iContent}
                  </Row>
                </div>
              );
            }
            itemsContent = (
              <Col
                key={items.menu1}
                span={12}
                id={`productImgCol${indexs + 1}`}
                className="productImgCol mb20"
              >
                <div className="productImgConItem">
                  <p className="produceItemTitle">
                    {items.menu1}
                    {itemName}
                  </p>
                  <p className="productIntroduction">
                    {goodsRange}
                  </p>
                  {iContent}
                </div>
              </Col>
            );
          });
        }
        content.push(itemsContent);
      });
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
            {/*<Col span={12} id="productImgCol2" className="productImgCol">*/}
            {/*<div className="productImgConItem">*/}
            {/*<p className="produceItemTitle">手推式洗地机</p>*/}
            {/*<p className="productIntroduction"/>*/}
            {/*<div className="productItem">*/}
            {/*<p className="productType">*/}
            {/*中型 <span>(3900-5100)m/h</span>*/}
            {/*</p>*/}
            {/*<Row gutter={24} className="productItemImgRow">*/}
            {/*<Col span={12}>*/}
            {/*<Link to="/productDetail">*/}
            {/*<div className="productItemImgCon">*/}
            {/*<div className="productItemImg">*/}
            {/*<img src={machine3}/>*/}
            {/*</div>*/}
            {/*<div className="productItemImgInt">*/}
            {/*型号 <span className="det">1470</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Link>*/}
            {/*</Col>*/}
            {/*<Col span={12}>*/}
            {/*<Link to="/productDetail">*/}
            {/*<div className="productItemImgCon">*/}
            {/*<div className="productItemImg">*/}
            {/*<img src={machine3}/>*/}
            {/*</div>*/}
            {/*<div className="productItemImgInt">*/}
            {/*型号 <span className="det">1470</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Link>*/}
            {/*</Col>*/}
            {/*</Row>*/}
            {/*<Row gutter={24} className="productItemImgRow">*/}
            {/*<Col span={12}>*/}
            {/*<div className="productItemImgCon">*/}
            {/*<div className="productItemImg">*/}
            {/*<img src={machine3}/>*/}
            {/*</div>*/}
            {/*<div className="productItemImgInt">*/}
            {/*型号 <span className="det">1470</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Col>*/}
            {/*<Col span={12}>*/}
            {/*<div className="productItemImgCon">*/}
            {/*<div className="productItemImg">*/}
            {/*<img src={machine3}/>*/}
            {/*</div>*/}
            {/*<div className="productItemImgInt">*/}
            {/*型号 <span className="det">1470</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Col>*/}
            {/*</Row>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</Col>*/}
          </Row>
        </div>
      </div>
    );
  }
}
