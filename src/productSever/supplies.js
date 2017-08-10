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
  },
  {
    photo: bj2,
    type: "",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: bj3,
    type: "",
    size: "17寸",
    auto: "Hussar 860B、Smart 450B、Smart 450E"
  },
  {
    photo: bj3,
    type: "",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  }
];

const spColumn = [
  {
    photo: sp1,
    type: "700121",
    size: "650W",
    auto: "Smart 450B、Smart 510B、Clever 510B、Clever 510BT、Ranger 510B"
  },
  {
    photo: sp2,
    type: "700251,700241",
    size: "400W",
    auto: "Clever 660BT、Ranger 660B、Hussar 660B、Hussar 760B、Hussar 860B"
  }
];
const xdColumn = [
  {
    photo: xd1,
    type: "242071",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  },
  {
    photo: xd2,
    type: "242081",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: xd3,
    type: "242091",
    size: "17寸",
    auto: "Hussar 860B"
  },
  {
    photo: xd4,
    type: "805653",
    size: "17寸",
    auto: "Smart 450B、Smart 450E"
  },
  {
    photo: xd5,
    type: "242041",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  }
];
const jtColumn = [
  {
    photo: jt1,
    type: "880753/880752/880750",
    size: "前/中/后",
    property: "普通",
    auto: "Smart 450B"
  },
  {
    photo: jt2,
    type: "880753/880751/880750",
    size: "前/中/后",
    property: "耐油",
    auto: "Smart 450B"
  },
  {
    photo: jt3,
    type: "880753/250241/880750",
    size: "前/中/后",
    property: "普通",
    auto: "Smart 510B、Clever 510B、Clever 510BT"
  },
  {
    photo: jt4,
    type: "880753/250231/880750",
    size: "前/中/后",
    property: "耐油",
    auto: "Smart 510B、Clever 510B、Clever 510BT"
  },
  {
    photo: jt5,
    type: "860706/050201/860707",
    size: "前/中/后",
    property: "普通",
    auto: "Clever 660BT"
  },
  {
    photo: jt6,
    type: "860706/250321/860707",
    size: "前/中/后",
    property: "耐油",
    auto: "Clever 660BT"
  },
  {
    photo: jt7,
    type: "250341/250351",
    size: "前/后",
    property: "普通",
    auto: "Ranger 660B,510B"
  },
  {
    photo: jt8,
    type: "250341/250361",
    size: "前/后",
    property: "耐油",
    auto: "Ranger 660B,510B"
  },
  {
    photo: jt9,
    type: "250381/250391",
    size: "前/后",
    property: "普通",
    auto: "Hussar 660,760,860"
  },
  {
    photo: jt10,
    type: "250381/250401",
    size: "前/后",
    property: "耐油",
    auto: "Hussar 660,760,860"
  }
];
const xsColumn = [
  {
    photo: xs1,
    type: "700131",
    size: "",
    auto: "Smart 450B、Smart 510B"
  },
  {
    photo: xs2,
    type: "700151",
    size: "",
    auto: "Clever 510B、Clever 510BT、Clever660BT"
  },
  {
    photo: xs3,
    type: "700261",
    size: "",
    auto: "Ranger 510B、Ranger 660B、Hussar 660B、Hussar 760B、Hussar 860B"
  }
];
const sbColumn = [
  {
    photo: sb1,
    type: "210021",
    size: "",
    auto: "PX-170N、PX-200N、PX-170DS、PX-170、PX-170G、PX-200、HPX-1500"
  },
  {
    photo: sb2,
    type: "210111",
    size: "",
    auto: "SPX-170N.SPX-170W、SPX-170DS.SPX-170"
  }
];
const zpColumn = [
  {
    photo: zp1,
    type: "240091",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  },
  {
    photo: zp2,
    type: "240101",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: zp3,
    type: "240111",
    size: "17寸",
    auto: "Hussar 860B"
  },
  {
    photo: zp4,
    type: "240061",
    size: "17寸",
    auto: "Smart 450B、Smart 450E"
  },
  {
    photo: zp5,
    type: "240071",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  },
  {
    photo: zp6,
    type: "240041",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: zp7,
    type: "240051",
    size: "20寸",
    auto: "PX-200N、PX-200"
  },
  {
    photo: zp8,
    type: "240011",
    size: "21寸",
    auto: "HPX-1500"
  }
];
const hcColumn = [
  {
    photo: hc1,
    type: "250011",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G"
  },
  {
    photo: hc1,
    type: "250061",
    size: "17寸",
    auto: "SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: hc1,
    type: "250021",
    size: "20寸",
    auto: "PX-200N、PX-200"
  },
  {
    photo: hc1,
    type: "250081",
    size: "21寸",
    auto: "HPX-1500"
  }
];
const dsColumn = [
  {
    photo: ds1,
    type: "242011",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: ds2,
    type: "242021",
    size: "20寸",
    auto: "PX-200N、PX-200"
  }
];
const tsColumn = [
  {
    photo: ts1,
    type: "242012",
    size: "17寸",
    auto: "PX-170N、SPX-170N、SPX-170W、SPX-170"
  }
];
const lzColumn = [
  {
    photo: lz1,
    type: "250091",
    size: "4寸",
    auto: "HPX-1500"
  },
  {
    photo: lz2,
    type: "250051",
    size: "5寸",
    auto:
      "PX-170N、PX-200、PX-170DS、PX-170、PX-170G、PX-200、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170、HPX-1500"
  }
];

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
      default:
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
          {item.hasOwnProperty("property")
            ? <td>
                {item.property}
              </td>
            : null}
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
              <th>
                {contentColumn === jtColumn ? "位置" : "尺寸"}
              </th>
              {contentColumn === jtColumn ? <th>性能</th> : null}
              <th>适用机型</th>
            </tr>
            {trContent}
          </table>
        </div>
      </div>
    );
  }
}
