import React from "react";
import logo from "web_modules/images/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    const column = [
      {
        name: "首页",
        path: "#/home",
        selected: true,
        key: "home"
      },
      {
        name: "产品展示",
        path: "#/product",
        selected: false,
        key: "product"
      },
      {
        name: "贝纳特",
        path: "#/company",
        selected: false,
        key: "company"
      },
      {
        name: "公司动态",
        path: "#/activity",
        selected: false,
        key: "activity"
      },
      {
        name: "联系我们",
        path: "#/contact",
        selected: false,
        key: "contact"
      },
      {
        name: "案例集锦",
        path: "#/cases",
        selected: false,
        key: "cases"
      },
      {
        name: "授权服务中心",
        path: "#/center",
        selected: false,
        key: "center"
      }
    ];
    this.state = {
      column
    };
  }

  onClick(key) {
    console.log("key", key);
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
  }

  render() {
    const { column } = this.state;
    const navContent = column.map((item, index) => {
      return (
        <li
          key={item.key}
          className={item.selected ? "navItem active" : "navItem"}
          onClick={() => {
            this.onClick(item.key);
          }}
        >
          <Link to={item.path}>
            {item.name}
          </Link>
        </li>
      );
    });
    return (
      <div className="container">
        <header className="header">
          <div className="logoContainer">
            <i className="iconfont icon-logo" />
            <div className="sloganContainer">
              <p>
                <span>高</span>
                <span>端</span>
                <span>清</span>
                <span>洁</span>
                <span>设</span>
                <span>备</span>
                <span>引</span>
                <span>领</span>
                <span>者</span>
              </p>
              <p>High-end Cleaning Machine Leader</p>
            </div>
          </div>
        </header>
        <nav className="navigation">
          <ul className="navInnerContainer">
            {navContent}
          </ul>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer" />
      </div>
    );
  }
}
