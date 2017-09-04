import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";
import dataHoc from "web_modules/component/datas";

@dataHoc({ url: "/cases/casesList/0/0/500" }, response => {
  return { data: response.data };
})
export default class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 0
    };
  }

  onClick = index => {
    const ind = parseInt(index);
    this.setState({
      info: ind
    });
  };

  render() {
    const data = this.props.data || [];
    const liContent = [];
    const { info } = this.state;
    if (data.length > 0) {
      data.map((item, index) => {
        liContent.push(
          <li
            className="casePicLi"
            key={index}
            onClick={() => this.onClick(index)}
          >
            <p className="casePicItem">
              {item.title}
            </p>
          </li>
        );
      });
    }
    return (
      <div className="whiteContent">
        <p className="title">案例集锦-图片</p>
        <Row>
          <Col span={6}>
            <ul className="casePicUl">
              {liContent}
            </ul>
          </Col>
          <Col span={18}>
            <div className="imgCon">
              {data.length > 0 && data[info].infoUrl
                ? <img src={data[info].infoUrl} />
                : <div>暂无</div>}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
