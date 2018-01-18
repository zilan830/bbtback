import React from "react";
import { Row, Col, message, Modal, Button } from "antd";
import baseReq from "web_modules/api/base";
import Edit from "web_modules/component/editor";

export default class NewsDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: [],
      isEdit: false,
      title: ""
    };
    this.text = "";
  }

  componentDidMount() {
    this.edit(this.props.data);
  }

  componentWillReceiveProps(props) {
    this.edit(props.data);
  }

  edit = data => {
    window.document.getElementById("edit").innerHTML = data.text;
    this.text = data.text;
    console.log("$PARANSthis.text", this.text);
    this.setState({
      title: data.title,
      text: data.text
    });
  };

  editNew = () => {
    const { isEdit } = this.state;
    console.log("$PARANSthis.text", this.text);
    this.setState({
      isEdit: !isEdit
    });
  };

  handleCancel = () => {
    this.setState({
      isEdit: false
    });
    window.document.getElementById("reset").click();
  };

  newChange = text => {
    this.text = text;
  };

  editChange = () => {
    const { type, data } = this.props;
    const form = window.document.getElementById("newForm");
    const formdata = new FormData(form);
    const { title } = this.state;
    formdata.delete("title");
    formdata.append("title", title);
    formdata.append("text", this.text);
    formdata.append("id", data.id);
    if (type === "News") {
      console.log("$PARANSNews");
      baseReq(`/boss/updateNews`, formdata)
        .then(res => {
          message.success("更新成功");
          window.document.getElementById("reset").click();
          this.handleCancel();
          this.props.refresh("News", 1);
        })
        .catch(err => {
          message.error(err);
        });
    } else {
      baseReq(`/boss/updateExhibition`, formdata)
        .then(res => {
          message.success("更新成功");
          window.document.getElementById("reset").click();
          this.handleCancel();
          this.props.refresh("Show", 1);
        })
        .catch(err => {
          message.error(err);
        });
    }
  };

  onChange = e => {
    const title = e.target.value;
    this.setState({
      title
    });
  };

  render() {
    const { data } = this.props;
    console.log("$PARANSthis.state", this.state, "data", data.text);
    const { isEdit, title } = this.state;
    return (
      <div>
        <Button onClick={this.editNew} style={{ position: "fixed" }}>
          编辑
        </Button>
        <div style={{ padding: "0 180px" }} className="newsDetInfo">
          <p className="title">
            {data.title}
          </p>
          <div className="newsDetInfoContent" id="edit" />
        </div>
        <Modal
          title="编辑"
          visible={isEdit}
          onCancel={this.handleCancel}
          onOk={this.editChange}
          width={1000}
        >
          <form id="newForm" encType="multipart/form-data">
            <p className="formItem">
              标题：<input
                type="text"
                style={{ width: "100%" }}
                value={title}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </p>
            <p className="formItem">
              添加主图片：
              <div
                style={{ width: "100px", height: "100px", overflow: "hidden" }}
              >
                已有图片
                <img src={data.infoImg} />
              </div>
              <div>
                如需更换图片请重新上传
                <input type="file" name="files" />
              </div>
            </p>
            <p className="formItem">
              <Edit onChange={this.newChange} text={data.text} />
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
