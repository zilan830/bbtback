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
      list: true,
      data: [],
      count: 0
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getData(type, 1);
  }

  componentWillReceiveProps(Props) {
    console.log("$PARANSProps", Props);

    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getData(type, 1);
    }

    this.setState({
      list: true
    });
  }

  onClick = id => {
    baseReq(`/news/newsOrExhibitionDetail/${id}`)
      .then(res => {
        console.log("$PARANSres", res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
    this.setState({
      list: false
    });
  };

  getData = (type, page) => {
    if (type === "News") {
      baseReq(`/news/newsList/${page}/10`)
        .then(res => {
          console.log("$PARANSres", res);
          this.setState({
            newInfo: res.data,
            count: res.count
          });
        })
        .catch(err => {
          message.error(err);
        });
    } else {
      baseReq(`/news/exhibitionList/${page}/10`)
        .then(res => {
          this.setState({
            newInfo: res.data,
            count: res.count
          });
        })
        .catch(err => {
          message.error(err);
        });
    }
  };

  onChange = (page, pageSize) => {
    console.log("$PARANSpage", page, pageSize);
    const { type } = this.props;
    this.getData(type, page);
  };

  render() {
    const { type } = this.props;
    const { newInfo, list, count, data } = this.state;
    console.log("$PARANSnewInfo", newInfo, count);
    let content = [];
    let imgContent = [];
    if (newInfo.length > 0) {
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
      imgContent = (
        <Carousel autoplay>
          {imgContent}
        </Carousel>
      );
    }
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
                  total={count}
                  onChange={(page, pageSize) => {
                    this.onChange(page, pageSize);
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
                {imgContent}
              </Col>
            </Row>
          : <Row className="whiteContent">
              <NewDet type={type} id={1} data={data} />
            </Row>}
      </div>
    );
  }
}
