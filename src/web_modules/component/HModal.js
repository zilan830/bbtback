import React from "react";
import { Modal } from "antd";

export default class HModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      visible: false,
      confirmLoading: false,
      footer: true
    };
  }

  componentDidMount() {
    this.setState({
      footer: this.props.hasOwnProperty("footer")
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setState({
        confirmLoading: nextProps.loading
      });
    }
    this.setState({
      footer: nextProps.hasOwnProperty("footer")
    });
  }

  show(title, ok, cancel) {
    this.setState({
      title: title,
      visible: true
    });
    this.handleOK = ok;
    this.handleCancel = cancel;
    // return new Promise((resolve, reject) => {
    //     this.handleOK = () => {
    //         resolve();
    //     }
    //     this.handleCancel = () => {
    //         reject();
    //     }
    // });
  }

  close() {
    this.setState({
      visible: false
    });
  }

  handleOK() {}

  handleCancel() {}

  render() {
    // mark: modal 传footer的时候，及时footer={undefined}的时候也不会显示默认的footer
    //
    if (this.state.footer) {
      return (
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOK.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          footer={this.props.footer}
          width={this.props.width}
          confirmLoading={this.state.confirmLoading}
        >
          {this.props.children}
        </Modal>
      );
    } else {
      return (
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOK.bind(this)}
          width={this.props.width}
          onCancel={this.handleCancel.bind(this)}
          confirmLoading={this.state.confirmLoading}
        >
          {this.props.children}
        </Modal>
      );
    }
  }
}
