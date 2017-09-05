import React from "react";
import { Row, Col, Pagination, message, Carousel } from "antd";
import { Link } from "react-router";
import baseReq from "web_modules/api/base";
import pic01 from "web_modules/images/pic01.png";
import Edit from "web_modules/component/editor";
import WEditor from "wangeditor";

export default class NewsDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: []
    };
  }

  componentDidMount() {
    console.log("$PARANSthis.props.data.text", this.props.data);
  }

  componentWillReceiveProps(props) {
    console.log("$PARANSprops.data.text", props.data);
  }

  edit = data => {
    const editor = new WEditor(this.editorDom);
    this.editor = editor;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = this.props.onChange;
    editor.customConfig.uploadFileName = this.props.uploadFileName || "files";
    editor.customConfig.uploadImgServer =
      this.props.uploadImgServer || "http://47.92.123.27/upload";
    editor.create();
    editor.txt.html(this.props.data.text);
  };

  render() {
    return (
      <div style={{ padding: "0 180px" }} className="newsDetInfo">
        <p className="title">标题</p>
        <div
          ref={editorDom => (this.editorDom = editorDom)}
          className="newsDetInfoContent"
        />
      </div>
    );
  }
}

// export default ({ data }) => {
//   // const editor = new WEditor(this.editorDom);
//   // this.editor = editor;
//   const E = window.WEditor
//   const editor = new E('#div1')
//   editor.create();
//   editor.txt.html('<p>用 JS 设置的内容</p>')
//   return (
//     <div style={{ padding: "0 180px" }} className="newsDetInfo">
//       <p className="title">
//         {data.title}
//       </p>
//       <div id="div1" className="newsDetInfoContent">
//         {data.text}
//         {/*<p className="textColorGrey font14 line20">*/}
//         {/*测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了测试会尽快回来看见拉开距离看见了*/}
//         {/*</p>*/}
//         {/*<img style={{ margin: "30px 0" }} src={pic01} />*/}
//       </div>
//       <div ref={editorDom => (this.editorDom = editorDom)} className="newsDetInfoContent"/>
//     </div>
//   );
// };
