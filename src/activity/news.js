import React from "react";
import { Row, Col, Pagination, message, Carousel } from "antd";
import { Link } from "react-router";
import baseReq from "web_modules/api/base";
import pic01 from "web_modules/images/pic01.png";
import NewDet from "./newDet";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: [],
      list: true
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getData(type, 0, 0);
  }

  componentWillReceiveProps(Props) {
    console.log("$PARANSProps", Props);
    this.setState({
      list: true
    });
  }

  onClick = id => {
    console.log("$PARANSid", id);
    this.setState({
      list: false
    });
  };

  getData = (type, page, pageSize) => {
    baseReq("/news/newsList/0/12")
      .then(res => {
        this.setState({
          newInfo: res
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  onChange = (page, pageSize) => {
    console.log("$PARANSpage", page, pageSize);
  };

  render() {
    const { type } = this.props;
    const { newInfo, list } = this.state;
    let content = [];
    const imgContent = [];
    newInfo.map((item, index) => {
      content.push(
        <li key={`new${index}`} className="newsLi">
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.onClick(item.id);
            }}
          >
            {item.title}
          </a>
        </li>
      );
      imgContent.push(
        <div key={`img${index}`}>
          <img src={item.infoImg} />
        </div>
      );
    });
    return (
      <div>
        {list
          ? <Row className="whiteContent">
              <p className="title">
                {type === "News" ? "企业新闻" : "展会风采"} News
              </p>
              <Col span={12} className="mt10">
                <Pagination
                  size="small"
                  total={100}
                  onChange={() => {
                    this.onChange;
                  }}
                />
                <ul className="newsUl">
                  {content}
                </ul>
              </Col>
              <Col
                span={12}
                className="mt10"
                style={{ paddingTop: "45px", height: "100%" }}
              >
                <Carousel autoplay>
                  <div>
                    <img src={pic01} />
                  </div>
                  <div>
                    <img src={pic01} />
                  </div>
                  <div>
                    <img src={pic01} />
                  </div>
                </Carousel>
              </Col>
            </Row>
          : <Row className="whiteContent">
              <NewDet />
            </Row>}
      </div>
    );
  }
}
