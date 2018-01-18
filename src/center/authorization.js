import React from "react";
import { Button, message, Modal } from "antd";
import baseReq from "web_modules/api/base";
import FormDet from "./authForm";

export default class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    baseReq(`/right_issuer/list`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  addNew = () => {
    this.setState({
      visible: true
    });
  };

  onOk = () => {
    this.setState({
      loading: true
    });
    this.refs.tec.validateFields((err, values) => {
      if (!!err) {
        console.log(err);
      } else {
        const obj = values;
        switch (values.areaType) {
          case "1":
            obj.areaTypeName = "东北区";
            break;
          case "2":
            obj.areaTypeName = "华北区";
            break;
          case "3":
            obj.areaTypeName = "华东区";
            break;
          case "4":
            obj.areaTypeName = "中南区";
            break;
          case "5":
            obj.areaTypeName = "西南区";
            break;
          case "6":
            obj.areaTypeName = "西北区";
            break;
          default:
            break;
        }
        baseReq(`/boss/addRightsIssuer`, obj)
          .then(res => {
            message.success("操作成功");
            this.setState({
              visible: false
            });
            this.refs.tec.resetFields();
            this.getData();
          })
          .catch(err => {
            message.error(err);
          });
      }
    });
  };

  onCancel = () => {
    this.refs.tec.resetFields();
    this.setState({
      visible: false
    });
  };

  render() {
    const data = this.state.data || [];
    const content = data.map((item, index) => {
      const list = [];
      if (item.hasOwnProperty("child")) {
        item.child.map((it, ind) => {
          list.push(
            <div key={`it-${ind}`}>
              <p className="areaItem">
                <span>
                  {ind + 1}、{it.company}
                </span>
                <span>
                  {it.area}
                </span>
              </p>
              <p className="areaItem">
                <span>
                  {it.address}
                </span>
                <span>
                  {it.phone}
                </span>
              </p>
            </div>
          );
        });
      }
      return (
        <div key={`item-${index}`} className="authItem">
          <p className="area">
            {item.areaName}
          </p>
          {list}
        </div>
      );
    });
    return (
      <div className="whiteContent">
        <Button onClick={this.addNew}>添加</Button>
        <div className="authCon">
          {content}
        </div>
        <Modal
          title="新建"
          visible={this.state.visible}
          onCancel={this.onCancel}
          onOk={this.onOk}
          width={800}
        >
          <FormDet ref="tec" />
        </Modal>
      </div>
    );
  }
}
