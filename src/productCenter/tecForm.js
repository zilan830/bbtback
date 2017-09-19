import React from "react";
import { Form, Input, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

class FormDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: 0,
      addContent: []
    };
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { data } = this.props.data;
    const children = [];
    for (let i = 1; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i} value={i}>
          {i}行
        </Option>
      );
    }
    const num = getFieldValue("index");
    const addContent = [];
    for (let i = 0; i < num; i++) {
      addContent.push(
        <FormItem key={`name${i}`} {...formItemLayout} label="中文名称">
          {getFieldDecorator(`name${i}`, {
            rules: [
              {
                required: true,
                message: "请输入中文名称"
              }
            ]
          })(<Input placeholder="请输入中文名称" />)}
        </FormItem>
      );
      addContent.push(
        <FormItem key={`item${i}`} {...formItemLayout} label="英文名称">
          {getFieldDecorator(`item${i}`, {
            rules: [
              {
                required: true,
                message: "请输入英文名称"
              }
            ]
          })(<Input placeholder="请输入英文名称" />)}
        </FormItem>
      );
      addContent.push(
        <FormItem key={`value${i}`} {...formItemLayout} label="数值">
          {getFieldDecorator(`value${i}`, {
            rules: [
              {
                required: true,
                message: "请输入数值"
              }
            ]
          })(<Input placeholder="请输入数值" />)}
        </FormItem>
      );
    }
    return (
      <Form>
        <FormItem
          style={num > 0 ? { display: "none" } : {}}
          {...formItemLayout}
          label="选择行数"
        >
          {getFieldDecorator("index", {
            rules: [
              { type: "number" },
              {
                required: true,
                message: "请输入数值"
              }
            ]
          })(
            <Select style={{ width: 200 }}>
              {children}
            </Select>
          )}
        </FormItem>
        {addContent}
      </Form>
    );
  }
}

const TecDet = Form.create()(FormDet);

export default TecDet;
