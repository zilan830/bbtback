import React, { Component } from "react";
import WEditor from "wangeditor";

// value: 富文本内容
// onChange: 内容改变的时候的回掉
// uploadImgServer: 图片上传的服务器接口地址
export default class Editor extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.editor.txt.html("");
    }
  }

  render() {
    return <div ref={editorDom => (this.editorDom = editorDom)} />;
  }

  componentDidMount() {
    const editor = new WEditor(this.editorDom);
    this.editor = editor;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = this.props.onChange;
    editor.customConfig.uploadFileName = this.props.uploadFileName || "files";
    editor.customConfig.uploadImgServer =
      this.props.uploadImgServer || "http://47.92.123.27/upload";
    editor.create();
    if (this.props.text) {
      editor.txt.html(this.props.text);
    }
  }

  componentWillUnmount() {
    // 销毁eidtor
  }
}
