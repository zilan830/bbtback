import React from "react";
import { Link } from "react-router";
import busIcon from "web_modules/images/icLogo.png";
import { Row, Col } from "antd";
import logoImg from "web_modules/images/logo.png";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    const column = [
      {
        name: "首页",
        path: "/home",
        selected: true,
        key: "home"
      },
      {
        name: "产品展示",
        path: "/product",
        selected: false,
        key: "product"
      },
      {
        name: "贝纳特",
        path: "/company",
        selected: false,
        key: "company"
      },
      {
        name: "公司动态",
        path: "/activity",
        selected: false,
        key: "activity"
      },
      {
        name: "联系我们",
        path: "/contact",
        selected: false,
        key: "contact"
      },
      {
        name: "案例集锦",
        path: "/cases",
        selected: false,
        key: "cases"
      },
      {
        name: "授权服务中心",
        path: "/center",
        selected: false,
        key: "center"
      }
    ];
    this.state = {
      column
    };
  }

  componentDidMount() {
    const { column } = this.state;
    const route = window.location.href;
    column.forEach((item, index) => {
      item.selected = false;
    });
    for (const item of column) {
      if (route.indexOf(item.key) > -1) {
        item.selected = true;
        break;
      }
    }
    // for(let i=0; i<column.length; i++){
    //   if(route.indexOf(column[i].key) > -1){
    //     column[i].selected = true;
    //   }else {
    //     column[i].selected = false;
    //   }
    // }
    this.setState({
      column
    });
  }

  onClick(key) {
    const { column } = this.state;
    column.forEach((item, index) => {
      item.selected = false;
    });
    for (const item of column) {
      if (item.key === key) {
        item.selected = true;
        break;
      }
    }
    //为了兼容ie9
    // for(let i=0; i<column.length; i++){
    //   if(column[i].key === key){
    //     column[i].selected = true;
    //   }else {
    //     column[i].selected = false;
    //   }
    // }

    this.setState({
      column
    });
  }

  render() {
    const { column } = this.state;
    const navContent = column.map(item => {
      return (
        <Col
          key={item.key}
          className={item.selected ? "navItem active" : "navItem"}
          onClick={() => {
            this.onClick(item.key);
          }}
        >
          <Link to={item.path}>
            {item.name}
          </Link>
        </Col>
      );
    });
    return (
      <div className="container">
        <header className="header">
          <div className="logoContainer">
            <img src={logoImg} className="logoImg" />
            <div className="sloganContainer">
              <p>高 端 清 洁 设 备 引 领 者</p>
              <p>High-end Cleaning Machine Leader</p>
            </div>
          </div>
        </header>
        <nav className="navigation">
          <Row className="navInnerContainer">
            {navContent}
          </Row>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer">
          <Row className="footCon">
            <Col span={20} className="footLink">
              <Link
                to="#/contact"
                className="footLinkTag"
                onClick={() => {
                  this.onClick("contact");
                }}
              >
                联系我们
              </Link>
              <p>
                <span>昆山市被纳特机械设备有限公司</span>
                <span>地址：昆山市季广北路119号</span>
                <span>
                  <a href="http://www.miibeian.gov.cn/" target="_blank">
                    苏IPC备11072808
                  </a>
                </span>
              </p>
            </Col>
            <Col span={4} className="busIcon">
              <a
                href="http://www.szgswljg.gov.cn/license?id=29551"
                target="_blank"
              >
                <img src={busIcon} />
              </a>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}
