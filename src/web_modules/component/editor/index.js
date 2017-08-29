import React, { Component } from "react";
import WEditor from "wangeditor";

export default class Editor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorContent: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.config !== this.props.config || nextProps.defaultConenet)
  }

  render() {
    return <div ref={editorDom => (this.editorDom = editorDom)} />;
  }
  componentDidMount() {
    const editor = new WEditor(this.editorDom);
    this.editor = editor;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      });
    };
    editor.customConfig.uploadImgServer = "/upload";
    editor.create();
    editor.txt.html(this.props.defaultConenet);
  }
  componentWillUnmount() {
    // 销毁eidtor
  }
  clickHandle() {
    alert(this.state.editorContent);
  }
}
