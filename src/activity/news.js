import React from "react";
import { Row, Col, Pagination } from "antd";
import { Link } from "react-router";

export default class News extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    return (
      <Row className="whiteContent">
        <Col span={12}>
          <p className="title">企业新闻 News</p>
          <Pagination size="small" total={100} pageSizeOptions={12} />
          <ul className="newsUl">
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
            <li className="newsLi">
              <Link to="/news/id">标题</Link>
            </li>
          </ul>
        </Col>
        <Col span={12}>
          <Pagination size="small" total={100} pageSizeOptions={12} />
          <div />
        </Col>
      </Row>
    );
  }
}
