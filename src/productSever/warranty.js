import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import bannerImg8 from "web_modules/images/08.jpg";

const smartItems = [
  ["502422", "电源线50英尺", "Smart450E/510E"],
  ["843610", "防溅板", "Smart450B/450E"],
  ["843611", "防溅板", "Smart510B/510E"],
  ["880750", "后橡胶条", "Smart450B/450E/510E/510B"],
  ["880751", "中间橡胶条", "Smart450B/450E/510E/510B"],
  ["880753", "前橡胶条", "Smart450B/450E/510E/510B"],
  ["67720030", "中间橡胶条", "Smart450B/450E/510E/510B"],
  ["880742", "前橡胶条", "Smart450B/450E/510E/510B"],
  ["67720010", "后橡胶条", "Smart450B/450E/510E/510B"],
  ["67050110", "万向轮", "Smart450B/450E/510E/510B"],
  ["885042", "手柄护套", "Smart450B/450E/510E/510B"]
];

const cleverItems = [
  ["", "电源线50英尺", "Clever510E"],
  ["", "防溅板", "Clever510E/510B/510BT"],
  ["", "防溅板", "Clever660BT"],
  ["", "多楔带", "Clever510E/510B/510BT"],
  ["", "切边V带", "Clever660BT"],
  ["", "防溅板", "Clever660BT"],
  ["", "手柄护套", "Clever510E/510B/510BT/660BT"],
  ["", "后橡胶条", "Clever510E/510B/510BT"],
  ["", "中间橡胶条", "Clever510E/510B/510BT"],
  ["", "前橡胶条", "Clever510E/510B/510BT"],
  ["", "中间橡胶条", "Clever660BT"],
  ["", "前橡胶条", "Clever660BT"],
  ["", "后橡胶条", "Clever660BT"],
  ["", "万向轮", "Clever510E/510B/510BT/660BT"],
  ["", "手柄护套", "Clever510E/510B/510BT/660BT"],
  ["", "手柄护套", "Clever510E/510B/510BT/660BT"]
];

const dragoonItems = [
  ["250631", "防溅板", "D100B"],
  ["211271", "缓冲轮", "D100B"],
  ["450451", "刹车蹄", "D100B"],
  ["211711", "防尘盖", "D100B"],
  ["211361", "缓冲轮", "D100B"],
  ["220461", "排污管", "D100B"],
  ["220471", "吸污管", "D100B"],
  ["220291", "吸污管", "D100B"],
  ["550121", "万向轮", "D100B"],
  ["250621", "前挂条", "D100B"],
  ["250611", "后刮条", "D100B"]
];

const hussarItems = [
  ["", "防溅板", "Hussar660B"],
  ["", "防溅板", "Hussar660B"],
  ["", "防溅板", "Hussar760B"],
  ["", "防溅板", "Hussar760B"],
  ["", "防溅板", "Hussar860B"],
  ["", "防溅板", "Hussar860B"],
  ["", "缓冲轮", "Hussar660B/760B/860B"],
  ["", "排污管", "Hussar660B/760B/860B"],
  ["", "吸污管", "Hussar660B/760B/860B"],
  ["", "吸污管", "Hussar660B/760B/860B"],
  ["", "惰轮", "Hussar660B/760B/860B"],
  ["", "前刮条", "Hussar660B/760B/860B"],
  ["", "后刮条", "Hussar660B/760B/860B"],
  ["", "后刮条（可选）", "Hussar660B/760B/860B"]
];

const pxspxItems = [
  ["", "手柄套", ""],
  ["", "电源线50英尺-美标", ""],
  ["", "17寸缓冲器", ""],
  ["", "5寸轮子", ""],
  ["", "缓冲器", ""],
  ["", "5寸轮子", ""],
  ["", "4寸轮子", ""],
  ["", "针盘", ""],
  ["", "百洁垫卡扣", ""],
  ["", "手柄套", ""],
  ["", "手柄套", ""],
  ["", "手把套", ""],
  ["", "17寸缓冲器", ""]
];

const rangerItems = [
  ["210921", "防溅板", ""],
  ["250101", "排污管", ""],
  ["220141", "排污管", ""],
  ["220341", "吸污管", ""],
  ["220291", "吸污管", ""],
  ["210421", "惰轮", ""],
  ["250341", "前刮条", ""],
  ["250351", "后刮条", ""],
  ["250361", "后刮条", ""]
];

const tornadoItems = [
  ["", "滚刷", ""],
  ["", "挡板", ""],
  ["", "挡板", ""],
  ["", "挡板", ""],
  ["", "挡板", ""],
  ["", "边刷", ""],
  ["", "密封条", ""],
  ["", "密封条", ""],
  ["", "密封条", ""],
  ["", "密封条", ""],
  ["", "缓冲轮", ""],
  ["", "手把套", ""],
  ["", "密封条", ""]
];

export default class Warranty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: smartItems
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getItem(type);
  }

  componentWillReceiveProps(Props) {
    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getItem(type);
    }
  }

  getItem = type => {
    switch (type) {
      case "WarrantySmart":
        this.setState({
          items: smartItems
        });
        break;
      case "WarrantyClever":
        this.setState({
          items: cleverItems
        });
        break;
      case "WarrantyRanger":
        this.setState({
          items: rangerItems
        });
        break;
      case "WarrantyHussar":
        this.setState({
          items: hussarItems
        });
        break;
      case "WarrantyDragoon":
        this.setState({
          items: dragoonItems
        });
        break;
      case "WarrantyTornado":
        this.setState({
          items: tornadoItems
        });
        break;
      case "WarrantyPX&SPX":
        this.setState({
          items: pxspxItems
        });
        break;
    }
  };

  render() {
    const { items } = this.state;
    const tds = items.map((tr, index) =>
      <tr className="font-fang-song textColorGrey">
        {tr.map(td =>
          <td key={`${td}${index}`} className="font-fang-song textColorGrey">
            {td}
          </td>
        )}
      </tr>
    );
    return (
      <div className="productServerContainer">
        <div className="productServerBanner">
          <img src={bannerImg8} />
        </div>
        <div className="textContent">
          <p className="title">
            {this.props.type.slice(8)} 系列保修说明：
          </p>
          <Row className="warranty">
            <Col span={12} className="warrantyItem">
              <p className="mb20 textWeight">
                贝纳特机械设备有限公司根据特定的工程要求对洗地机进行制造、测试和检验，并且从以下方面确保工艺和材质无缺陷。
              </p>
              <p className="font-fang-song">
                更坏零配件和免费保修一年；直流或交流电机和齿轮箱，除电机的开关、碳刷、电容器以及电气线路中的保险丝，其他的保修期一年。
              </p>
              <p className="font-fang-song">更换零配件和免费保修一年：铸件和钣金件。</p>
              <p className="font-fang-song">更换零配件和免费保修一年：除下面所列零件外的所有其他部件。</p>
              <p className="mb50 font-fang-song">
                本保修期适用于最终用户和经销商，并且仅在用户根据贝纳特机械设备有限公司的操作和维护说明进行使用、操作和维护的情况下适用。
              </p>
              <p className="mb20 textWeight">本保修期不适用于以下情况：</p>
              <p className="font-fang-song">
                本保修期不适用于由于使用不当，滥用或者疏忽所造成的人为损坏或故障。保修信用或返回零件的更换包括更换电机等取决于这些返回项目的检验。
              </p>
              <p className="font-fang-song">
                本保修期仅限于贝纳特机械设备有限公司义务范围内的产品维修和/或替换保修期内的零配
              </p>
            </Col>
            <Col span={12} className="warrantyItem">
              <p className="font-fang-song">件，并不包括由于使用不当管理不当引起的偶然的或间接的损坏。</p>
              <p className="mb20 font-fang-song">
                本保修期代替所有其他明示或暗示的保证，也适用于最终用户和分销商。
              </p>
              <p className="textWeight">本保修期不适用于下列磨损件以及机械配件，其中包括：</p>
              <table className="warrantyTable">
                <tr>
                  <th>零件号</th>
                  <th>名称</th>
                  <th>备注</th>
                </tr>
                {tds}
              </table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
