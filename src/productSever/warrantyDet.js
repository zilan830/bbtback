import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import bannerImg8 from "web_modules/images/08.jpg";

const items = [
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

export default class Warranty extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const tds = items.map((tr, index) =>
      <tr className="textColorGrey">
        {tr.map(td =>
          <td key={`${td}${index}`} className="textColorGrey">
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
          <p className="title">Smart 系列保修说明：</p>
          <Row className="warranty">
            <Col span={12} className="warrantyItem">
              <p className="mb20 textWeight">
                贝纳特机械设备有限公司根据特定的工程要求对洗地机进行制造、测试和检验，并且从以下方面确保工艺和材质无缺陷。
              </p>
              <p>更坏零配件和免费保修一年；直流或交流电机和齿轮箱，除电机的开关、碳刷、电容器以及电气线路中的保险丝，其他的保修期一年。</p>
              <p>更换零配件和免费保修一年：铸件和钣金件。</p>
              <p>更换零配件和免费保修一年：除下面所列零件外的所有其他部件。</p>
              <p className="mb50 ">
                本保修期适用于最终用户和经销商，并且仅在用户根据贝纳特机械设备有限公司的操作和维护说明进行使用、操作和维护的情况下适用。
              </p>
              <p className="mb20 textWeight">本保修期不适用于以下情况：</p>
              <p>
                本保修期不适用于由于使用不当，滥用或者疏忽所造成的人为损坏或故障。保修信用或返回零件的更换包括更换电机等取决于这些返回项目的检验。
              </p>
              <p>本保修期仅限于贝纳特机械设备有限公司义务范围内的产品维修和/或替换保修期内的零配</p>
            </Col>
            <Col span={12} className="warrantyItem">
              <p>件，并不包括由于使用不当管理不当引起的偶然的或间接的损坏。</p>
              <p className="mb20 ">本保修期代替所有其他明示或暗示的保证，也适用于最终用户和分销商。</p>
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
