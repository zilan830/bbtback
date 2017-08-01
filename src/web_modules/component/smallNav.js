import React from "react";
import { Row, Col } from "antd";

// const navColumn = [
//   {
//     key: 1,
//     name: "关于我们",
//     selected: true,
//     children: [
//       {
//         key: 10,
//         name: "公司简介",
//         selected: true,
//       },
//       {
//         key: 11,
//         name: "产品发展史"
//       }
//     ]
//   },
//   {
//     key: 2,
//     name: "企业理念",
//     children: [
//       {
//         key: 20,
//         name: "公司简介"
//       },
//       {
//         key: 21,
//         name: "产品发展史"
//       }
//     ]
//   }
// ];

// const breadColumn = ["贝纳特", "关于我们", "公司简介"];

export default class SmallNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColumn: [],
      breadColumn: []
    };
  }

  componentDidMount() {
    const { navColumn, breadColumn } = this.props;
    this.setState({
      navColumn,
      breadColumn
    });
  }

  componentWillReceiveProps(props) {
    if (props.navColumn !== this.porps.navColumn) {
      const navColumn = props.navColumn;
      this.setState({
        navColumn
      });
    }
  }

  onClick = key => {
    let newKey = String(key);
    newKey = parseInt(newKey.slice(0, 1));
    const { navColumn, breadColumn } = this.state;

    navColumn.forEach(items => {
      items.selected = false;
      if (items.children) {
        items.children.forEach(item => {
          item.selected = false;
        });
      }
    });

    for (const items of navColumn) {
      if (items.key === newKey) {
        items.selected = true;
        breadColumn[1] = items.name;
        if (items.children) {
          for (const item of items.children) {
            if (item.key === key) {
              item.selected = true;
              breadColumn[2] = item.name;
              break;
            }
          }
        } else {
          breadColumn.splice(2);
        }
        break;
      }
    }

    this.setState({
      navColumn,
      breadColumn
    });
  };

  render() {
    const { navColumn, breadColumn } = this.state;
    let navContent = [];
    navColumn.map(items => {
      if (items.children) {
        let itemList = items.children.map(item =>
          <span
            key={item.key}
            className={
              item.selected ? "productDetItem active" : "productDetItem"
            }
            onClick={() => {
              this.onClick(item.key);
            }}
          >
            {item.name}
          </span>
        );
        itemList = (
          <Row key={`${items.key}Row`} className="productDetCon">
            {itemList}
          </Row>
        );
        navContent.push(
          <Col
            key={items.key}
            span={items.span}
            className={
              items.selected ? "productItem active hover" : "productItem"
            }
          >
            {items.name}
            {itemList}
          </Col>
        );
      } else {
        navContent.push(
          <Col
            key={items.key}
            span={items.span}
            className={items.selected ? "productItem active" : "productItem"}
            onClick={() => {
              this.onClick(items.key);
            }}
          >
            {items.name}
          </Col>
        );
      }
    });

    let position = "首页";

    breadColumn.forEach(item => {
      position = `${position}>${item}`;
    });

    const breadContent = `当前位置:${position}`;

    return (
      <Row className="productTitleContainer font-hei">
        <Col span={this.props.span.nav} className="productTitles">
          {navContent}
        </Col>
        <Col span={this.props.span.bread} className="productPosition">
          {breadContent}
        </Col>
      </Row>
    );
  }
}
