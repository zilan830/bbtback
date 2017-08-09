import React from "react";
import { Row, Col } from "antd";

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
    if (props.navColumn !== this.props.navColumn) {
      const navColumn = props.navColumn;
      this.setState({
        navColumn
      });
    }
  }

  onClick = (key, component) => {
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

    if (breadColumn[0] === breadColumn[1]) {
      breadColumn.shift();
    }

    this.props.change(component);

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
              this.onClick(item.key, item.component);
            }}
          >
            {item.name}
          </span>
        );
        itemList = (
          <div key={`${items.key}Row`} className="productDetCon">
            {itemList}
          </div>
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
              this.onClick(items.key, items.component);
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
