import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";
import dataHoc from "web_modules/component/datas";

// const videos = {
//   test: require("./1.mp4")
// };

@dataHoc({ url: "/cases/casesList/1/0/500" }, response => {
  console.log("$PARANSresponse", response);
  return { data: response.data };
})
export default class Video extends React.Component {
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
    const { info } = this.state;
    const liContent = [];
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
        <p className="title">案例集锦-视频</p>
        <Row className="videoContent">
          <Col span={6}>
            <ul className="casePicUl">
              {liContent}
            </ul>
          </Col>
          <Col span={18}>
            <div className="videoCon">
              {data.length > 0 && data[info].infoUrl
                ? <video
                    width="100%"
                    height="100%"
                    src={data[info].infoUrl}
                    controls
                  >
                    Your browser does not support HTML5 video.
                  </video>
                : <div>暂无</div>}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
