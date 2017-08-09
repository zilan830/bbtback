import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";

// const videos = {
//   test: require("./1.mp4")
// };

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: {
        test: require("./1.mp4")
      }
    };
  }

  render() {
    const { videos } = this.state;
    return (
      <div className="whiteContent">
        <p className="title">案例集锦-视频</p>
        <Row className="videoContent">
          <Col span={6}>
            <ul className="casePicUl">
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
            </ul>
          </Col>
          <Col span={18}>
            <div className="videoCon">
              <video width="100%" height="100%" src={videos.test} controls>
                Your browser does not support HTML5 video.
              </video>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
