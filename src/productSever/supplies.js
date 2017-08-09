import React from "react";
import { Row, Col } from "antd";
import supplies1 from "web_modules/images/supplies1.jpg";
import supplies2 from "web_modules/images/supplies2.jpg";
import supplies3 from "web_modules/images/supplies3.jpg";
import supplies4 from "web_modules/images/supplies4.jpg";
import supplies5 from "web_modules/images/supplies5.jpg";
import supplies6 from "web_modules/images/supplies6.jpg";
import supplies7 from "web_modules/images/supplies7.jpg";
import bj1 from "web_modules/images/bj1.png";
import bj2 from "web_modules/images/bj2.png";
import bj3 from "web_modules/images/bj3.png";
import bj4 from "web_modules/images/bj4.png";
import ds1 from "web_modules/images/ds1.png";
import ds2 from "web_modules/images/ds2.png";
import hc1 from "web_modules/images/hc1.png";
import hc2 from "web_modules/images/hc2.png";
import hc3 from "web_modules/images/hc3.png";
import hc4 from "web_modules/images/hc4.png";
import jt1 from "web_modules/images/jt1.png";
import jt2 from "web_modules/images/jt2.png";
import jt3 from "web_modules/images/jt3.png";
import jt4 from "web_modules/images/jt4.png";
import jt5 from "web_modules/images/jt5.png";
import jt6 from "web_modules/images/jt6.png";
import jt7 from "web_modules/images/jt7.png";
import jt8 from "web_modules/images/jt8.png";
import jt9 from "web_modules/images/jt9.png";
import jt10 from "web_modules/images/jt10.png";
import lz1 from "web_modules/images/lz1.png";
import lz2 from "web_modules/images/lz2.png";
import sb1 from "web_modules/images/sb1.png";
import sb2 from "web_modules/images/sb2.png";
import sp1 from "web_modules/images/sp1.png";
import sp2 from "web_modules/images/sp2.png";
import ts1 from "web_modules/images/ts1.png";
import xd1 from "web_modules/images/xd1.png";
import xd2 from "web_modules/images/xd2.png";
import xd3 from "web_modules/images/xd3.png";
import xd4 from "web_modules/images/xd4.png";
import xd5 from "web_modules/images/xd5.png";
import xs1 from "web_modules/images/xs1.png";
import xs2 from "web_modules/images/xs2.png";
import xs3 from "web_modules/images/xs3.png";
import zp1 from "web_modules/images/zp1.png";
import zp2 from "web_modules/images/zp2.png";
import zp3 from "web_modules/images/zp3.png";
import zp4 from "web_modules/images/zp4.png";
import zp5 from "web_modules/images/zp5.png";
import zp6 from "web_modules/images/zp6.png";
import zp7 from "web_modules/images/zp7.png";
import zp8 from "web_modules/images/zp8.png";

const column = [
  {
    name: "百洁垫",
    imgPath: supplies1,
    key: "bj",
    selected: true
  },
  {
    name: "刷盘电机",
    imgPath: supplies2,
    key: "sp"
  },
  {
    name: "洗地刷",
    imgPath: supplies3,
    key: "xd"
  },
  {
    name: "胶  条",
    imgPath: supplies4,
    key: "jt"
  },
  {
    name: "吸水电机",
    imgPath: supplies5,
    key: "xs"
  },
  {
    name: "手柄套",
    imgPath: sb1,
    key: "sb"
  },
  {
    name: "针  盘",
    imgPath: supplies7,
    key: "zp"
  },
  {
    name: "缓冲器",
    imgPath: hc1,
    key: "hc"
  },
  {
    name: "地刷",
    imgPath: ds1,
    key: "ds"
  },
  {
    name: "毯刷",
    imgPath: ts1,
    key: "ts"
  },
  {
    name: "轮子",
    imgPath: lz1,
    key: "lz"
  }
];

const bjColumn = [
  {
    photo: bj1,
    type: "",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  }
];

const spColumn = [];
const xdColumn = [];
const jtColumn = [];
const xsColumn = [];
const sbColumn = [];
const zpColumn = [];
const hcColumn = [];
const dsColumn = [];
const tsColumn = [];
const lzColumn = [];

export default class Supplies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column,
      contentColumn: bjColumn
    };
  }

  componentDidMount() {}

  handleOnClick = key => {
    const { column } = this.state;
    let contentColumn = [];
    column.forEach(item => {
      item.selected = false;
    });
    for (const item of column) {
      if (item.key === key) {
        item.selected = true;
        break;
      }
    }

    switch (key) {
      case "bj":
        contentColumn = bjColumn;
        break;
      case "sp":
        contentColumn = spColumn;
        break;
      case "xd":
        contentColumn = xdColumn;
        break;
      case "jt":
        contentColumn = jtColumn;
        break;
      case "xs":
        contentColumn = xsColumn;
        break;
      case "sb":
        contentColumn = sbColumn;
        break;
      case "zp":
        contentColumn = zpColumn;
        break;
      case "hc":
        contentColumn = hcColumn;
        break;
      case "ds":
        contentColumn = dsColumn;
        break;
      case "ts":
        contentColumn = tsColumn;
        break;
      case "lz":
        contentColumn = lzColumn;
        break;
    }

    this.setState({
      column,
      contentColumn
    });
  };

  render() {
    const { type } = this.props;
    const { column, contentColumn } = this.state;
    let name = "";
    switch (type) {
      case "SuppliesWash":
        name = "洗地机";
        break;
      case "SuppliesSweep":
        name = "扫地机";
        break;
      case "SuppliesRub":
        name = "擦地机";
        break;
      default:
        break;
    }
    const imgContent = column.map(item => {
      return (
        <Col
          data-name={item.name}
          key={item.key}
          className={item.selected ? "itemImgCon hover" : "itemImgCon"}
          onClick={() => {
            this.handleOnClick(item.key);
          }}
        >
          <div className="imgCon">
            <img src={item.imgPath} />
          </div>
        </Col>
      );
    });
    const trContent = contentColumn.map(item => {
      return (
        <tr>
          <td>
            <img src={item.photo} />
          </td>
          <td>
            {item.type}
          </td>
          <td>
            {item.size}
          </td>
          <td>
            {item.auto}
          </td>
        </tr>
      );
    });
    return (
      <div className="productServerContainer">
        <p className="title">{`耗材-${name}系列`}</p>
        <div className="suppliesImgCons">
          <Row className="suppliesImgCon" style={{ width: "1603px" }}>
            {imgContent}
          </Row>
        </div>
        <div className="textContent font-fang-song suppliesTableCon">
          <table className="suppliesIntTable">
            <tr>
              <th>照片</th>
              <th>产品零件号</th>
              <th>尺寸</th>
              <th>适用机型</th>
            </tr>
            {trContent}
          </table>
        </div>
      </div>
    );
  }
}
