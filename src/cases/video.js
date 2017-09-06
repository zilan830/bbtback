import React from "react";
import { Row, Col, Button, message, Modal } from "antd";
import pic01 from "web_modules/images/pic01.png";
import dataHoc from "web_modules/component/datas";
import baseReq from "web_modules/api/base";

// @dataHoc({ url: "/cases/casesList/1/0/500" }, response => {
//   console.log("$PARANSresponse", response);
//   return { data: response.data };
// })
export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 0,
      visible: false
    };
  }

  onClick = index => {
    const ind = parseInt(index);
    this.setState({
      info: ind
    });
  };

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    baseReq(`/cases/casesList/1/0/500`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  addCon = () => {
    this.setState({
      visible: true
    });
  };

  onOk = () => {
    const form = window.document.getElementById("newForm");
    const formdata = new FormData(form);
    formdata.append("type", 1);
    baseReq(`/boss/addCases`, formdata)
      .then(res => {
        message.success("操作成功");
        this.setState({
          visible: false
        });
        window.document.getElementById("reset").click();
        this.getData();
      })
      .catch(err => {
        message.error(err);
      });
  };

  onCancel = () => {
    window.document.getElementById("reset").click();
    this.setState({
      visible: false
    });
  };

  render() {
    const data = this.state.data || [];
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
        <Button onClick={this.addCon}>添加</Button>
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
        <Modal
          title="新建"
          visible={this.state.visible}
          onCancel={this.onCancel}
          onOk={this.onOk}
          width={500}
        >
          <form id="newForm" encType="multipart/form-data">
            <p className="formItem">
              标题：<input type="text" name="title" />
            </p>
            <p className="formItem">
              添加主图片：<input type="file" name="files" />
            </p>
            <input
              style={{ display: "none" }}
              id="reset"
              type="reset"
              value="Reset"
            />
          </form>
        </Modal>
      </div>
    );
  }
}
